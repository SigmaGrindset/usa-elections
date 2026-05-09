# USA Elections

Web aplikacija za vizualizaciju rezultata predsjedničkih izbora u Sjedinjenim Američkim Državama od 1789. do 2024. godine.

## Tehnologije

### Scraping

Podaci su prikupljeni scrapeanjem službenih stranica **National Archivesa** (`archives.gov/electoral-college`). Za svaku godinu izbora scraper prikuplja podatke o kandidatima, strankama, broju electoral votesa po kandidatu i broju electoral votesa po saveznoj državi.

- **Python**
- **BeautifulSoup4** - parsiranje HTML stranica

### Baza podataka

Podaci su pohranjeni u **PostgreSQL** bazu podataka. Shema se sastoji od pet tablica: `Election`, `Candidate`, `ElectionCandidate`, `StateResult` i `StateResultCandidate`.

- **PostgreSQL** - relacijska baza podataka
- **Neon** - cloud hosting PostgreSQL baze

### Backend

REST API koji izlaže endpoint za dohvat podataka o izborima. Deployano na **Vercel**.

- **Node.js**
- **Express**
- **pg** - PostgreSQL klijent za Node.js

### Frontend

Single Page Application koja vizualizira podatke o izborima. Deployano na **Vercel**.

- **React** - UI library
- **TypeScript**
- **TanStack Router** - client-side routing
- **TanStack Query** - dohvat i caching podataka
- **Tailwind CSS** - styles
- **D3** - interaktivna karta SAD-a

## Stranice

### Početna stranica (`/`)

Prikazuje kratki opis aplikacije i njenih mogućnosti, navigaciju s linkovima na sve predsjedničke izbore grupirane po desetljećima, odabir dvaju izbora za usporedbu te objašnjenje kako funkcionira Electoral College.

### Pregled izbora (`/election/:year`)

Prikazuje rezultate predsjedničkih izbora za odabranu godinu. Uključuje pobjednika s brojem electoral votesa, interaktivnu kartu SAD-a gdje je svaka savezna država obojena bojom stranke pobjednika, te detalje o rezultatima po saveznoj državi.

### Usporedba izbora (`/compare/:year1/:year2`)

Omogućuje usporedbu dvaju izbora. Prikazuje pobjednike i electoral votese za oba izbora, dvije karte SAD-a jednu pored druge, kartu swing stateova (saveznih država koje su promijenile stranku između dvaju izbora) te listu svih swing stateova.
