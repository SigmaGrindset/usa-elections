from bs4 import BeautifulSoup
from constants import (
    YEARS,
    BASE_URL,
    PARTY_NORMALIZATION,
    STATES_NORMALIZATION,
    NICKNAMES,
    PRESIDENT_COUNT,
)
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

    def scrape_1789_table(self, table):
        rows = table.find_all("tr")
        candidates = []
        totals = []
        states = rows[0].find_all("th")
        states = states[1 : len(states) - 1]
        states = [normalize_state(state.get_text().strip()) for state in states]
        votes_dict = dict()
        for state in states:
            votes_dict[state] = []

        for row in rows[1 : len(rows) - 1]:
            tds = row.find_all("td")
            for i in range(0, len(tds[1 : len(tds) - 1])):
                td = tds[1 + i]
                state_name = states[i]
                text = td.get_text()
                votes = 0 if "-" in text else int(text)
                votes_dict[state_name].append(votes)

            candidate = tds[0].get_text().split(", Esq")[0].strip()
            total = int(tds[-1].get_text().strip())
            totals.append(total)
            candidates.append(candidate)
        total_evs = rows[-1].find_all("td")[0:-1]
        total_evs = [int(td.get_text().strip()) for td in total_evs]
        votes = []

        for i in range(0, len(states)):
            state = states[i]
            total = total_evs[i]
            votes_arr = votes_dict[state]
            obj = {"state": state, "total": total, "votes": votes_arr}
            votes.append(obj)
        result = {
            "candidates": candidates,
            "totals": totals,
            "votes": votes,
        }
        return result

    def scrape_votes_table(self, table):
        if self.year == 1789:
            return self.scrape_1789_table(table)
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
            state_name = tds[0].get_text().strip()
            state_name = state_name.replace("\xa0", "")
            state_name = re.sub(r"[\d\*]+$", "", state_name)
            state_name = state_name.strip()
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
            for sup in td.find_all("sup"):
                sup.decompose()
            votes = td.get_text().strip().split("(")[0]
            votes = 0 if "-" in votes else int(votes)
            totals.append(votes)
        return totals

    def get_candidates(self, row):
        tds = row.find_all("td")
        candidates = []
        for td in tds:
            text = td.get_text()
            split = text.split("of")
            name = split[0].strip()
            name = re.sub(r"\d+$", "", name).strip()
            name = name.replace(",", "").replace("*", "").strip()
            candidates.append(name)
        return candidates


def normalize_state(abbr):
    return STATES_NORMALIZATION.get(abbr, abbr)


def normalize_party(raw):
    return PARTY_NORMALIZATION.get(raw, raw)


parties = set()


def names_match(name1: str, name2: str) -> bool:
    parts1 = name1.lower().replace(".", "").split()
    parts2 = name2.lower().replace(".", "").split()
    if parts1[-1] != parts2[-1]:
        return False
    first1 = NICKNAMES.get(parts1[0], parts1[0])
    first2 = NICKNAMES.get(parts2[0], parts2[0])
    return first1.startswith(first2) or first2.startswith(first1)


def format_data(general_info, votes, year):
    results = dict()
    results["year"] = year
    split = (
        general_info["total_majority"]
        .replace("*", "")
        .replace("(", "")
        .replace(")", "")
        .split("/")
    )
    results["total_ev"] = int(split[0].split(" ")[0])
    results["majority_ev"] = int(split[1])
    results["state_results"] = []
    candidates = votes["candidates"]
    totals = votes["totals"]
    if year != 1789:
        totals = totals[1:]
    results["candidates"] = []
    for i in range(0, len(candidates)):
        candidate_obj = {
            "name": candidates[i],
            "party": "Unknown",
            "role": "vice_president",
            "total_ev": totals[i],
            "is_winner": False,
        }
        if names_match(general_info["president_name"], candidate_obj["name"]):
            candidate_obj["party"] = general_info["president_party"]
        else:
            for name, party in general_info["opponents"]:
                if names_match(name, candidate_obj["name"]):
                    if party:
                        candidate_obj["party"] = party

        president_count = PRESIDENT_COUNT.get(year, len(candidates) // 2)
        if year <= 1800:
            candidate_obj["role"] = "president"
        elif i < president_count:
            # elif i < len(candidates) // (3 if year in [1840, 1820, 1816, 1808] else 2):
            candidate_obj["role"] = "president"
        winner_name = general_info["president_name"]
        if (
            names_match(winner_name, candidate_obj["name"])
            and candidate_obj["role"] == "president"
        ):
            candidate_obj["is_winner"] = True
        results["candidates"].append(candidate_obj)

    others = [c for c in results["candidates"] if c["name"] == "Other"]
    non_others = [c for c in results["candidates"] if c["name"] != "Other"]

    if others:
        merged_other = {
            "name": "Other",
            "party": "Unknown",
            "role": "president",
            "total_ev": sum(o["total_ev"] for o in others),
            "is_winner": False,
        }

        results["candidates"] = non_others + [merged_other]
    for vote in votes["votes"]:
        state_obj = dict()
        state_obj["state_name"] = vote["state"]
        state_obj["total_ev"] = vote["total"]
        state_obj["candidate_ev"] = []
        for i in range(0, len(candidates)):
            candidate_obj = {"name": candidates[i], "ev_count": vote["votes"][i]}
            state_obj["candidate_ev"].append(candidate_obj)

        results["state_results"].append(state_obj)

    for state in results["state_results"]:
        other_ev = sum(
            c["ev_count"] for c in state["candidate_ev"] if c["name"] == "Other"
        )
        state["candidate_ev"] = [
            c for c in state["candidate_ev"] if c["name"] != "Other"
        ]
        if other_ev > 0 or others:
            state["candidate_ev"].append({"name": "Other", "ev_count": other_ev})
    return results


def main():
    my_years = YEARS
    for year in reversed(my_years):
        print(f"\n--------Scraping: {year}-----------")
        loader = Loader(year)
        scraper = Scraper(year, loader)
        general_info, votes = scraper.scrape()
        data = format_data(general_info, votes, year)
        # print(data["candidates"])
        # print(votes["candidates"])
        response_delete = requests.delete(f"http://localhost:3000/api/election/{year}")
        response_post = requests.post("http://localhost:3000/api/election", json=data)
        print(response_post)


main()
