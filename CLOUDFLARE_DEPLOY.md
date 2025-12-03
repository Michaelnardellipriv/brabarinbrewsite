# Guida alla Pubblicazione su Cloudflare Pages

## Prerequisiti
1. Account Cloudflare (https://dash.cloudflare.com)
2. Git installato
3. Repository GitHub (pubblico o privato)

## Step 1: Preparare il repository GitHub

```bash
# Inizializzare Git se non già fatto
git init

# Aggiungere tutti i file
git add .

# Commit iniziale
git commit -m "Initial commit: Barbarian Brew Museum"

# Creare un repository su GitHub e pushare
git remote add origin https://github.com/TUO_USERNAME/brabarinbrewsite.git
git branch -M main
git push -u origin main
```

## Step 2: Connettere Cloudflare Pages

1. Accedi a Cloudflare Dashboard (https://dash.cloudflare.com)
2. Vai a **Pages** nel menu sinistro
3. Clicca **Create a project** > **Connect to Git**
4. Autorizza Cloudflare ad accedere al tuo GitHub
5. Seleziona il repository `brabarinbrewsite`
6. Clicca **Begin setup**

## Step 3: Configurare Build e Deploy

Nella sezione "Build settings":

- **Framework preset**: Next.js
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Root directory**: `/` (o lascia vuoto)

Aggiungi variabili d'ambiente se necessarie:
- **NODE_VERSION**: 20 (o la versione che usi)

## Step 4: Deploy

Clicca **Save and Deploy**. Cloudflare farà:
1. Build del progetto Next.js
2. Ottimizzazione automatica
3. Deploy con SSL/TLS
4. Generazione URL pubblico (es: `barbarian-brew-museum.pages.dev`)

## Step 5: Configurazione Dominio Personalizzato (Opzionale)

Dopo il deploy:
1. Vai in **Pages** > progetto > **Custom domains**
2. Clicca **Set up a custom domain**
3. Aggiungi il tuo dominio (es: `barbarianbrewmuseum.it`)
4. Segui le istruzioni per aggiornare i DNS

## Build Locale per Test

Prima di pushare:

```bash
npm run build
npm run start
```

Visita http://localhost:3000 per testare

## Troubleshooting

### Build fallisce
- Verifica che `npm run build` funziona localmente
- Controlla i log in Cloudflare Dashboard

### Pagine 404
- Assicurati che tutte le route siano definite in `/app`
- Next.js gestisce automaticamente il routing file-based

### Variabili d'ambiente
Se hai bisogno di variabili segrete:
1. In Cloudflare Pages, vai a **Settings** > **Environment variables**
2. Aggiungi le variabili necessarie

## Link Utili
- Docs Cloudflare Pages: https://developers.cloudflare.com/pages/
- Docs Next.js: https://nextjs.org/docs
