# Upute za pokretanje aplikacije

Web-aplikacija za vizualizaciju rezultata predsjedničkih izbora u SAD-u (1789. - 2024.).

## Pregled aplikacije

Aplikacija je deployana i dostupna na:

**https://usa-elections-client.vercel.app/**

Ovo je najjednostavniji način za pregled jer ne traži nikakvo postavljanje. Baza
podataka, poslužitelj i sučelje već su pokrenuti u oblaku.

## Arhitektura

Aplikacija se sastoji od tri dijela:

- **`client/`** - korisničko sučelje (React + Vite)
- **`server/`** - REST API (Node.js + Express), čita podatke iz baze
- **`data/`** - Python skripta za prikupljanje podataka (web scraping) koja
  prikupljene podatke šalje poslužitelju

Podaci su pohranjeni u **PostgreSQL** bazi koja je smještena u oblaku (Neon).

## Lokalno pokretanje

> **Napomena o bazi:** poslužitelj se spaja na bazu preko privatnog pristupnog
> niza (`DATABASE_URL`) koji nije uključen u repozitorij i ne dijeli se javno.
> Bez njega lokalni poslužitelj i skripta za prikupljanje nemaju izvor podataka.
> Zato je za pregled rezultata predviđena gornja deployana verzija. Upute u
> nastavku služe za uvid u strukturu i lokalno pokretanje pojedinih dijelova.

### Preduvjeti

- Node.js 20+ i npm
- Python 3 (samo ako se pokreće skripta za prikupljanje)

### Sučelje (`client/`)

```
cd client
npm install
npm run dev
```

Sučelje se pokreće na `http://localhost:5173`. Adresa poslužitelja zadaje se
varijablom okruženja `VITE_API_URL` u datoteci `client/.env`:

```
VITE_API_URL=http://localhost:3000
```

Sučelje se može pokrenuti i samostalno, ali bez dostupnog poslužitelja s bazom
neće imati podatke za prikaz.

### Poslužitelj (`server/`)

```
cd server
npm install
npm run dev
```

Poslužitelj se pokreće na `http://localhost:3000`. Prije pokretanja potrebno je
u datoteci `server/.env` postaviti varijable okruženja:

```
DATABASE_URL=<pristupni niz za PostgreSQL bazu>
CLIENT_URL=http://localhost:5173
PORT=3000
```

Kao što je navedeno gore, `DATABASE_URL` se ne dijeli, pa lokalni poslužitelj
neće raditi bez vlastite PostgreSQL baze.

### Skripta za prikupljanje podataka (`data/`)

```
cd data
pip install requests beautifulsoup4
python scraper.py
```

Skripta prikuplja podatke sa stranica Nacionalnog arhiva SAD-a (HTML stranice su
već spremljene lokalno u `data/pages/`) i šalje ih poslužitelju, pa za upis
zahtijeva pokrenuti poslužitelj povezan s bazom.
