# YGCRT Website (المؤسسة العامة للإذاعة والتلفزيون)

Arabic-first (RTL), mobile-first institutional media website prototype with light (default) and dark themes.
Content comes from the YGCRT research report. Demonstration content and unconfirmed facts are marked on the site.

## Stack
Plain HTML, CSS and ES modules. **No dependencies and no bundler.** Node 18+ is only used for a tiny dev server and a copy-based build.
Fonts: IBM Plex Sans Arabic via Google Fonts (see `index.html`).

## Commands
```bash
npm install        # nothing to download, safe to run
npm run dev        # http://localhost:5173
npm run build      # outputs static site to ./dist
npm run preview    # serves ./dist locally
```
Deploy to Vercel: import the folder (or `npx vercel`). `vercel.json` already sets build command `npm run build` and output `dist`.
Routing uses URL hashes (`#home`, `#channels-docu`, `#archive-doc`), so direct loading and refresh work on any static host with no rewrite rules.
Any static host works (Netlify, GitHub Pages, S3): upload `dist`.

## Structure
| Path | What it holds |
|---|---|
| `index.html` | Page shell: header, bottom nav, footer, radio dock, modal, anti-flash theme script |
| `src/app.js` | Router, page templates (object `V`: home, about, channels, radio, archive, news, contact), interactions, radio player |
| `src/data.js` | All content: `CH` channels, `RD` radios, `PR` productions, `NW` news, `TL` timeline, `CAT` categories |
| `src/theme.js` | Theme toggle and persistence |
| `src/styles/tokens.css` | Design tokens for light (`:root`) and dark (`:root[data-theme=dark]`) |
| `src/styles/main.css` | Components and responsive rules (mobile overrides in the `@media(max-width:899px)` block) |
| `src/styles/theme.css` | Theme-aware overrides and homepage section styles |
| `assets/logo.jpg` | Official logo (do not distort) |

## Editing
- **Pages/sections:** edit the matching function in `V` inside `src/app.js`. The homepage is `V.home`.
- **Content:** edit `src/data.js`. Replace "بانتظار التأكيد" values once confirmed.
- **Navigation:** top nav `NAV`, bottom bar `BN`/`MORE` (in `src/app.js`).
- **Colors/themes:** change variables in `tokens.css`. Brand colors are `--navy --blue --cyan --green --red` in `main.css`.
- **Theme behavior:** light is always the first-visit default; the choice is saved in `localStorage` key `ygcrt-theme`. OS preference is intentionally ignored.
- **Images:** card artwork is generated CSS (`--a`, `--p` per category). To use real images, add files in `assets/` and set them as backgrounds in `.art`/`.ch` or replace the markup in `pcard`/`chcard`.
- **Logo:** replace `assets/logo.jpg` (keep the same filename).

## Known limits
No backend: the contact form validates only and sends nothing. Live TV is not connected. The radio stream URL (Sana'a Radio) comes from the report and is not verified to work from every host. No authentic channel logos, posters or photos are included yet.
