# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
hugo server          # lokal dev-server på http://localhost:1313
hugo                 # byg til public/
hugo --minify        # byg med minificering til produktion
```

Kræver Hugo extended v0.141.0+. Temaet (Hugo Relearn) er et git-submodul under `themes/` — ved første checkout kør `git submodule update --init`.

## Deployment

GitHub Actions (`.github/workflows/hugo.yml`) bygger med `hugo --minify` og deployer til GitHub Pages ved push til `master`. `public/` er også committed til git og bruges til alternativ deployment.

## Arkitektur

Frea-X 2.0 er et Hugo-baseret statisk site med terminal/hacker-æstetik (sort baggrund, grøn tekst, monospace).

**To separate layout-systemer kører side om side:**

- `layouts/index.html` — Hjemmesiden er et fuldt standalone HTML-dokument. Det bruger *ikke* `baseof.html` og har sin egen `<head>`, nav og footer direkte i filen.
- `layouts/_default/baseof.html` — Bruges til alle undersider. Bygger på Hugo Relearn-tema-strukturen med partials: `meta.html`, `topbar/`, `dependencies.html`, `custom-header.html`, `custom-footer.html`.

**CSS-split:**

- `assets/css/freax.css` — Bruges af hjemmesiden (`layouts/index.html`) via Hugo asset pipeline.
- `static/css/freax.css` og `static/css/custom.css` — Statisk CSS til undersider (kopieres direkte til output).

**JavaScript:**

- `static/js/dont-push.js` — Easter egg-knap: spiller audio (`/audio/crematory-revolution.mp3`) og kalder `bluetoothChaos()`.
- `static/js/bluetooth-chaos.js` — Web Bluetooth chaos, importeres af `dont-push.js`.

**Data/quotes-arkitektur:**

- `layouts/data/all-vards.json` — Hugo output-template der genererer `/data/all-vards.json` fra content-sektionerne `ekkoer/` og `artefakter/` (disse sektioner er planlagte, men ikke oprettet endnu).
- `layouts/shortcodes/random-vard.html` og `layouts/partials/footer.html` forsøger at hente quotes fra `data-varder`-sektionen — denne content type eksisterer ikke endnu.
- `layouts/partials/custom/footer.html` — Indeholder hardkodet quotes-array som fallback til easter egg-modalen.

**Versionsnummer** (`v0.0.42`) er hardkodet i `layouts/index.html`, `assets/css/freax.css` og `config/_default/hugo.toml` (`params.version`). Opdateres manuelt alle steder ved versionsbump.

**Front matter-format** (YAML, minimalt):
```yaml
---
title: "Sidetitel"
---
```
