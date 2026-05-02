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
        self.scrape_general_info_table(tables[0])

    def scrape_general_info_table(self, table):
        president_name, president_party = self.get_main_candidate_info(
            table, "President"
        )
        op_name, op_party = self.get_main_candidate_info(table, "Main Opponent")
        # vp = self.get_vice_candidate_info(table, "Vice President")
        # op_vp = self.get_vice_candidate_info(table, "V.P. Opponent")
        # winner_ev, main_op_ev, total_majority = self.get_electoral_vote(table)

    def get_info_row(self, table, th_name):
        row = table.find("th", string=re.compile(th_name)).parent
        return row

    def get_electoral_vote(self, table):
        row = self.get_info_row(table, "Electoral Vote")
        winner_ev = int(self.get_specific_count(row, "Winner"))
        main_op_ev = int(self.get_specific_count(row, "Main Opponent"))
        total_majority = self.get_specific_count(row, "Total/Majority")
        return (winner_ev, main_op_ev, total_majority)

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
        if "Others" not in votes_part:
            return votes_part
        print(td)
        print(votes_part)
        split = votes_part.split(" (Others ")
        print(split)
        return votes

    def get_main_candidate_info(self, table, th_name):
        row = self.get_info_row(table, th_name)
        td = row.find("td")
        text = td.get_text()
        name, other = text.split(" [")
        name = name.strip()
        other = other.replace("]", "").replace(")", "").strip()
        print(name, other)
        return (name, other)

    def get_vice_candidate_info(self, table, th_name):
        row = self.get_info_row(table, th_name)
        td = row.find("td")
        sup = td.find("sup")
        if sup:
            sup.decompose()
        text = td.get_text()
        candidates = []
        for text in text.split("),"):
            name, other = "", ""
            if " [" in text:
                name, other = text.split(" [")
            elif " (" in text:
                name, other = text.split(" (")
            else:
                *name, other = text.split()
                name = " ".join(name)

            name = name.strip()
            other = other.replace("]", "").replace(")", "").replace("*", "").strip()
            print(name, other)
            candidates.append((name, other))
        return candidates

    def scrape_data_table(self, table):
        pass


def main():
    for year in reversed(YEARS):
        print(f"\n--------Scraping: {year}-----------")
        loader = Loader(year)
        scraper = Scraper(year, loader)
        scraper.scrape()


main()
