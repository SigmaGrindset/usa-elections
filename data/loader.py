from constants import BASE_URL
from urllib.request import Request, urlopen
import os


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
