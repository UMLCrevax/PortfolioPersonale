# Portfolio Andrea Crevacore - Setup Guide

Un sito portfolio moderno, bilingue (IT/EN) con design stile Apple, costruito con React, TypeScript, Tailwind CSS e Supabase.

## Caratteristiche Principali

- Design moderno stile Apple con animazioni fluide
- Completamente bilingue (Italiano/Inglese)
- Sezioni: Hero, Competenze, Esperienza, Formazione, Progetti, CV
- Timeline verticale per formazione e certificazioni
- Pannello amministrazione per gestire i contenuti
- Download e invio CV via email
- Responsive design per tutti i dispositivi

## Setup del Database

1. Vai al tuo progetto Supabase Dashboard
2. Apri l'SQL Editor
3. Copia e incolla il contenuto del file `database-setup.sql`
4. Esegui lo script per creare tutte le tabelle necessarie

Il database include:
- `experiences` - Esperienze lavorative
- `education` - Formazione e certificazioni
- `skills` - Competenze tecniche
- `projects` - Progetti live
- `cv_documents` - Documenti CV
- `site_config` - Configurazioni del sito

## Setup Autenticazione

Per accedere al pannello admin:

1. Vai a Supabase Dashboard > Authentication > Users
2. Crea un nuovo utente con email e password
3. Usa queste credenziali per accedere al pannello admin su `/admin`

## Installazione e Avvio

```bash
# Installa le dipendenze (già fatto)
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build
```

## Accesso al Pannello Admin

1. Naviga su `/admin` nel tuo browser
2. Accedi con le credenziali Supabase create
3. Gestisci tutti i contenuti:
   - Esperienze lavorative
   - Formazione e certificazioni
   - Competenze
   - Progetti

## Personalizzazione

### Modificare i Contenuti

Usa il pannello admin su `/admin` per:
- Aggiungere nuove esperienze
- Aggiungere formazione/certificazioni
- Modificare competenze
- Aggiungere progetti live

### Modificare i Link Social

Modifica il file `src/components/Footer.tsx`:

```typescript
const socialLinks = [
  {
    icon: Linkedin,
    href: 'TUO_PROFILO_LINKEDIN',
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'TUO_PROFILO_GITHUB',
    label: 'GitHub',
  },
  {
    icon: Mail,
    href: 'mailto:TUA_EMAIL',
    label: 'Email',
  },
];
```

### Aggiungere una Foto Profilo

Nel file `src/components/Hero.tsx`, puoi aggiungere un'immagine:

```tsx
<div className="mb-6">
  <img
    src="/path/to/your/photo.jpg"
    alt="Andrea Crevacore"
    className="w-40 h-40 rounded-full mx-auto object-cover shadow-xl"
  />
</div>
```

### Modificare i Colori

Il sito usa una palette neutra di default. Per modificare i colori, edita il file `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // Aggiungi i tuoi colori personalizzati
    }
  }
}
```

## Struttura del Progetto

```
src/
├── components/           # Componenti React
│   ├── Navigation.tsx    # Barra di navigazione
│   ├── Hero.tsx          # Sezione hero
│   ├── Skills.tsx        # Competenze
│   ├── Experience.tsx    # Esperienze lavorative
│   ├── Education.tsx     # Formazione con timeline
│   ├── Projects.tsx      # Progetti live
│   ├── CV.tsx            # Download/invio CV
│   ├── Footer.tsx        # Footer con social
│   ├── AdminPanel.tsx    # Pannello amministrazione
│   └── LanguageSwitcher.tsx  # Switch lingua
├── i18n/
│   └── config.ts         # Configurazione traduzioni
├── lib/
│   └── supabase.ts       # Client Supabase
├── App.tsx               # Componente principale
├── main.tsx              # Entry point
└── index.css             # Stili globali

database-setup.sql        # Script setup database
```

## Funzionalità del Pannello Admin

Il pannello admin permette di:

1. **Gestire Esperienze**: Aggiungi, modifica ed elimina esperienze lavorative
2. **Gestire Formazione**: Aggiungi lauree e certificazioni
3. **Gestire Competenze**: Modifica le tue competenze tecniche
4. **Gestire Progetti**: Aggiungi progetti con link live e screenshot

Tutte le modifiche sono immediate e non richiedono competenze tecniche avanzate.

## Integrazione LinkedIn

Per sincronizzare i dati da LinkedIn:

1. **Manuale**: Copia i dati dal tuo profilo LinkedIn e inseriscili tramite il pannello admin
2. **Automatico** (futuro): Si può implementare l'integrazione con l'API LinkedIn per sincronizzazione automatica

## CV Upload

Per permettere il download del CV:

1. Carica i file PDF nella cartella `public/cv/`
2. Nomina i file: `Andrea_Crevacore_CV_it.pdf` e `Andrea_Crevacore_CV_en.pdf`
3. Il bottone di download punterà automaticamente a questi file

## Deploy

Il sito può essere deployato su:
- Vercel
- Netlify
- Cloudflare Pages

Assicurati di configurare le variabili d'ambiente:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Supporto

Per problemi o domande:
- Controlla che il database sia configurato correttamente
- Verifica che le variabili d'ambiente siano impostate
- Controlla la console del browser per eventuali errori

## Tecnologie Utilizzate

- React 18
- TypeScript
- Tailwind CSS
- Supabase (Database + Auth)
- react-i18next (Internazionalizzazione)
- Lucide React (Icone)
- Vite (Build tool)
