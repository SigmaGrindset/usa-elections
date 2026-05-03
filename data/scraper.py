from bs4 import BeautifulSoup
from constants import YEARS, BASE_URL
import requests
from urllib.request import Request, urlopen
import re
import os

# archives.gov scraper


class Loader:
    def __init__(self, year):
        self.year = year
        self.url = BASE_URL + str(year)
        self.cache_path = f"pages/{year}.html"

    def load(self):
        if os.path.exists(self.cache_path):
            with open(self.cache_path, "r", encoding="utf-8") as f:
                return f.read()
        html = self.fetch()
        self.save(html)
        return html

    def fetch(self):
        req = Request(self.url)
        return urlopen(req).read()

    def save(self, html):
        os.makedirs("pages", exist_ok=True)
        with open(self.cache_path, "wb") as f:
            f.write(html)


class Scraper:
    def __init__(self, year, loader):
        self.year = year
        self.loader = loader
        self.setup()

    def setup(self):
        html = self.loader.load()
        self.bs = BeautifulSoup(html, "lxml")

    def scrape(self):
        tables = self.bs.find_all("table")[:2]
        general_info = self.scrape_general_info_table(tables[0])
        votes = self.scrape_votes_table(tables[1])
        return (general_info, votes)

    def scrape_general_info_table(self, table):
        president_name, president_party = self.get_president_info(table)
        ops = self.get_opponents_info(table)
        winner_ev, total_majority = self.get_electoral_vote(table)
        result = {
            "president_name": president_name,
            "president_party": president_party,
            "opponents": ops,
            "winner_ev": winner_ev,
            "total_majority": total_majority,
        }
        return result

    def scrape_votes_table(self, table):
        rows = table.find_all("tr")
        totals_index = self.get_totals_index(rows)
        candidates_row = rows[1]
        vote_rows = rows[2:totals_index]
        totals_row = rows[totals_index]
        candidates = self.get_candidates(candidates_row)
        totals = self.get_totals(totals_row)
        votes = self.get_votes(vote_rows)
        result = {
            "candidates": candidates,
            "totals": totals,
            "votes": votes,
        }
        return result

    def get_totals_index(self, rows):
        for i in range(0, len(rows)):
            row = rows[i]
            if row.find(string=re.compile("Total")):
                return i

    def get_info_row(self, table, th_name):
        row = table.find("th", string=re.compile(th_name))
        if not row:
            return None
        return row.parent

    def get_electoral_vote(self, table):
        row = self.get_info_row(table, "Electoral Vote")
        winner_ev = int(self.get_specific_count(row, "Winner"))
        # main_op_ev = int(self.get_specific_count(row, "Main Opponent"))
        total_majority = self.get_specific_count(row, "Total/Majority")
        return (winner_ev, total_majority)

    def get_specific_count(self, row, td_name):
        td = next((t for t in row.find_all("td") if td_name in t.get_text()), None)

        if td is None:
            raise Exception("nije pronaden count")

        for sup in td.find_all("sup"):
            sup.decompose()
        votes_part = (
            td.get_text(strip=True, separator=" ")
            .split(":")[-1]
            .strip()
            .replace("*", "")
        )
        votes_part = votes_part.replace("\xa0", " ").strip()
        return votes_part

    def get_president_info(self, table):
        row = self.get_info_row(table, "President")
        candidates = self.get_main_candidate_info(table, row)
        return candidates[0]

    def get_opponents_info(self, table):
        row = self.get_info_row(table, "Main Opponent")
        if not row:
            row = self.get_info_row(table, "Opponents")
        opponents = self.get_main_candidate_info(table, row)
        return opponents

    def get_main_candidate_info(self, table, row):
        candidates = []
        td = row.find("td")
        text = td.get_text()
        for text in text.split("; "):
            name, other = "", ""
            if " [" in text:
                name, other = text.split(" [")
            elif " (" in text:
                name, other = text.split(" (")
                other = ""
            else:
                raise Exception("nema separatora")
            name = name.strip()
            other = other.replace("]", "").replace(")", "").strip()
            other = normalize_party(other)
            parties.add(other)
            candidates.append((name, other))
        return candidates

    def get_votes(self, rows):
        votes = []
        for row in rows:
            tds = row.find_all("td")
            if len(tds) == 0:
                continue
            state_name = tds[0].get_text()
            text = tds[1].get_text()
            total_state_votes = 0 if "-" in text else int(text)
            state_votes = []
            for td in tds[2:]:
                text = td.get_text().strip().replace("(", "").replace(")", "")
                num_votes = 0 if "-" in text else int(text)
                state_votes.append(num_votes)
            votes.append(
                {
                    "state": state_name,
                    "total": total_state_votes,
                    "votes": state_votes,
                }
            )
        return votes

    def get_totals(self, row):
        tds = row.find_all("td")
        totals = []
        for td in tds:
            if "Total" in td.get_text():
                continue
            votes = td.get_text().strip().split("(")[0]
            votes = 0 if "-" in votes else int(votes)
            totals.append(votes)
        return totals

    def get_candidates(self, row):
        tds = row.find_all("td")
        candidates = []
        for td in tds:
            text = td.get_text()
            name = text.split("of")[0].strip()
            name = name[0 : len(name) - 1]
            candidates.append(name)
        return candidates


PARTY_NORMALIZATION = {
    "R": "Republican",
    "D": "Democratic",
    "F": "Federalist",
    "Federalist": "Federalist",
    "Federalist/Independent D-R": "Federalist/Independent Democratic-Republican",
    "D-R": "Democratic-Republican",
    "Democratic-Republican": "Democratic-Republican",
    "Independent D-R": "Democratic-Republican",
    "National Republican": "National Republican",
    "Whig": "Whig",
    "D-P": "Democratic-Populist",
    "P": "Progressive",
    "Independent": "Independent",
    "": "",
}


def normalize_party(raw):
    return PARTY_NORMALIZATION.get(raw, raw)


parties = set()


def main():
    for year in reversed(YEARS):
        year = 1789
        print(f"\n--------Scraping: {year}-----------")
        loader = Loader(year)
        scraper = Scraper(year, loader)
        general_info, votes = scraper.scrape()
        break


main()
