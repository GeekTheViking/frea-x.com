# 🛸 FREA-X 2.0

> *Open Source, GPL, digital sovereignty — the values that shape Frea-X.*
> *From an old Norse word: frea — free.*

**[frea-x.com](https://frea-x.com)** — Built by [Geek The Viking](https://github.com/GeekTheViking). Exploited by the community.

---

## What is Frea-X?

Frea-X is not a blog. Not a news site. Not a product.

It is a **lab**. A place where open source, hacker culture, digital rights and honest curiosity collide — and where things get built because they *should* exist, not because someone will pay for them.

[Geek The Viking](https://geektheviking.com) sailed The Lost Packet through CyberSpace, saw what was out there, and came home with stories that couldn't be ignored. Stories about AI built to serve profit instead of people. About EU citizens communicating through infrastructure owned by interests they've never heard of. About an open internet quietly being closed.

Frea-X is the answer to those stories.

---

## CyberSpace — The 42 Minutes News

> *"This is not the News. This is the 42 Minutes News from CyberSpace."*

The centrepiece of Frea-X. A curated, real-time global news aggregator pulling from **60+ RSS/Atom feeds** across **13 categories** — updated automatically every hour at **:42**.

| Category | |
|---|---|
| 🤖 AI & Machine Learning | 💬 Developer Community |
| 🖥️ Open Source & Infrastructure | 🛸 HackSpace, LUG & Community |
| 🏠 Selfhosting | 💻 The Geek Laptop |
| 🔐 Security & Vulnerabilities | 🇪🇺 EU & Policy |
| 🌍 Global — Africa · Asia · LatAm | 🗺️ Europa — DE · FR · IT · ES |
| 🇩🇰 Dansk & Nordisk IT | ⎔ GitHub Trending |
| 🧅 Digital Freedom & Open Internet | |

**42-hour window** — only stories from the last 42 hours.
**Language-aware** — non-English sources tagged (DA, DE, FR, ES, PT, JA) with one-click 🌐 translate.
**No ads. No tracking. No agenda.** Just signal.

Why :42? Because 42 is the answer to life, the universe and everything. Obviously.

---

## The Seal of Frea-X

```
✅  Open Source and GPL — the code belongs to the community
✅  White Hat welcome — understand systems to defend them
✅  Digital freedom — Tor, encryption and privacy are common sense
✅  Data stays in the EU — always
✅  If money is made, it flows back into the ecosystem
❌  We don't build things so others can tear them down
❌  Black hat and abuse of other people's systems? Wrong place.
```

---

## The Ecosystem

| Project | What it is | Status |
|---|---|---|
| **[frea-x.com](https://frea-x.com)** | The lab — CyberSpace, AI Campus, Easter Eggs | 🟡 Active development |
| **[PostBox.eu](https://postbox.eu)** | Digital sovereignty platform for EU citizens | 🟡 Active development |
| **Frankenstein AI** | AI built to serve humanity — not shareholders | 🔵 In the works |
| **PROSTEIN AI** | Frankenstein AI integrated into PostBox.eu | 🟡 Active development |
| **[Geek The Viking](https://geektheviking.com)** | The explorer. The mascot. The reason. | 🟢 Always active |

---

## Architecture

```
GitHub Action (runs at XX:42)
  └── cyberspace/fetch-feeds.py
        └── Fetches 60+ RSS/Atom feeds (42h window)
              └── Writes static/data/feed-cache.json
                    └── Hugo builds site
                          └── /cyberspace/ renders live feed via JS
```

| Layout | Used for |
|---|---|
| `layouts/index.html` | Homepage — fully standalone |
| `layouts/_default/baseof.html` | All subpages (Hugo Relearn base) |
| `layouts/_default/cyberspace.html` | CyberSpace — fully standalone |

---

## Stack

- **[Hugo](https://gohugo.io/)** extended v0.141.0+ with [Relearn theme](https://mcshelby.github.io/hugo-theme-relearn/)
- **Python 3.12** — RSS feed aggregation (`cyberspace/fetch-feeds.py`)
- **GitHub Actions** — automated feed updates at :42 + deployment
- **GitHub Pages** — hosting

---

## Run locally

```bash
git clone --recurse-submodules https://github.com/GeekTheViking/frea-x.com
cd frea-x.com
hugo server
```

Feed fetcher:

```bash
cd cyberspace
pip install feedparser requests
python fetch-feeds.py
```

---

## Pages

| Page | Description |
|---|---|
| `/` | Homepage — the manifesto |
| `/cyberspace/` | The 42 Minutes News from CyberSpace |
| `/seal-of-freax/` | The principles of Frea-X |
| `/ai-campus/` | AI as a meeting place — for AI, by AI |
| `/frankenstein/` | Frankenstein AI — on the nature of artificial creation |

---

## Contributing

Frea-X is open source and community-driven.

If you're from a hackspace, a LUG, or you just believe the internet should be free and open — you're already one of us. Contributions, issues and ideas are welcome.

Read the [Seal of Frea-X](https://frea-x.com/seal-of-freax/) before you open a PR. It's short. It matters.

---

## License

**GPL** — the code belongs to the community. That's the deal.

---

*Frea-X Agent v0.0.42 · License to Exploit · To infinity... and beyond, CyberSpace!*
*— Geek The Viking, somewhere on The Lost Packet*
