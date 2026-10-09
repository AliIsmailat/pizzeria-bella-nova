# Pizzeria Bella Nova (Demo)

Demo-landningssida för en påhittad pizzeria i Malmö. Pizzerian, adressen, telefonnumret och mejladressen är påhittade, och sidan är inte ett riktigt företag. Sidan har en varm, lekfull och rustik italiensk känsla, och målet är att besökaren ska ringa och beställa.

**Live:** https://pizzeria-bella-nova.netlify.app/

## Funktioner

- Mobilen först, responsiv från små mobiler till stora skärmar
- Ett enda mål: knappen "Ring och beställ" (`tel:`-länk som ringer direkt på mobil), med numret i klartext bredvid på desktop
- Fast ringknapp längst ner på mobilen som dyker upp när man skrollat förbi hero-knappen
- Sektioner: hero, meny i kategorier (pizzor, sallader, dryck), öppettider, hitta hit (karta), kontakt och sidfot
- Hoppknappar till menykategorierna, utan JavaScript
- Dagens veckodag markeras i öppettiderna
- Inbäddad karta från OpenStreetMap, ingen API-nyckel behövs
- Semantisk HTML, tydliga fokusmarkeringar och tillräcklig färgkontrast

## Prestanda

Uppmätt med Lighthouse (mobil):

| Performance | Accessibility | Best Practices | SEO | Agentic Browsing |
| :---------: | :-----------: | :------------: | :-: | :--------------: |
|     95      |      100      |      100       | 100 |       2/2        |

Bilder skalas och konverteras till WebP vid bygget (max 1600 px bredd, flera storlekar via `srcset`). Alla bilder utom hero-bilden lazy-laddas.

## Design

- **Typsnitt:** Lilita One till rubriker och Nunito till brödtext, via Google Fonts
- **Färger:** tomatröd, krämvit och mörkgrön, med en ljus grön nyans för omväxlande bakgrunder
- **Former:** pillformade knappar, stora hörnradier, sned etikett i hero, gröna prislappar, vågiga kanter mellan sektionerna och en rutig duk-rand vid menyrubrikerna (ren CSS och SVG)

## Teknik

- [Vite](https://vite.dev), [React](https://react.dev) och TypeScript
- [Tailwind CSS](https://tailwindcss.com) v3
- [vite-imagetools](https://github.com/JonasKruckenberg/imagetools) för bildoptimering

## Komma igång

Du behöver Node.js installerat.

```bash
npm install
npm run dev
```

Öppna adressen som visas i terminalen, oftast `http://localhost:5173`.

Bygg och förhandsgranska produktionsversionen:

```bash
npm run build
npm run preview
```

## Projektstruktur

```
src/
├── content.ts            All kundspecifik data och designvärden
├── App.tsx               Sätter ihop sektionerna i rätt ordning
├── index.css             Tailwind och grundstil
├── assets/               Bilder och logotyp
│   └── placeholders/     Platshållare som används tills riktiga bilder finns
└── components/
    ├── Hero.tsx
    ├── Menu.tsx
    ├── OpeningHours.tsx
    ├── Location.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    ├── CallButton.tsx    Knappen "Ring och beställ"
    ├── StickyCallBar.tsx Fast ringrad på mobil
    ├── Divider.tsx       Vågiga kanter mellan sektioner
    └── Picture.tsx       Visar bilder (lazy loading, srcset, platshållare)
```

## Byta till en annan kund

All kundspecifik information och alla designvärden ligger i `src/content.ts`:

1. **Texter, meny, öppettider, adress och kontaktuppgifter** i `site`.
2. **Färger** i `theme.colors`, **typsnitt** i `theme.fonts` och **hörnradier** i `theme.radius`. Tailwind läser värdena därifrån.
3. **Sidtitel och beskrivning** i `site.meta`. Google Fonts-länken, `<title>` och `<meta name="description">` i `index.html` fylls i automatiskt vid bygget av en liten plugin i `vite.config.ts`.
4. **Bilder:** lägg nya bilder i `src/assets/` med samma filnamn som i `images` (`hero`, `pizza`, `sallad`, `ugn`, med ändelsen .jpg, .png eller .webp). De ersätter platshållarna automatiskt.
5. **Logotyp:** byt ut `src/assets/logo.svg`.

Skriv också in fotografens namn i `photographer` för varje bild, så visas de i sidfoten.

## Bildkrediter

Foton från [Unsplash](https://unsplash.com). Fotografernas namn visas i sidfoten.
