---
title: "Frea-X Workflow"
---

# Frea-X Workflow
## Code Construction Management

Frea-X Workflow is a traceability system for code files — inspired by how the construction industry manages buildings, drawings and responsibility.

Every file knows who built it, why it exists, and where it is in its lifecycle.

---

## Why?

Code without context is a liability. When you return to a file six months later — or hand it to someone else — you need to know:

- What does this file do?
- Who is responsible for it?
- Is it finished, or still under construction?
- What changed last, and when?

Frea-X Workflow answers all of that — from the top of every file.

---

## The 7 Phases

Inspired by the construction industry. Every file moves through these phases:

| Phase | Name | Meaning |
|-------|------|---------|
| ● 1/7 | **Idea** | A thought, a sketch, a concept |
| ● 2/7 | **Planning** | Structure is in place, not yet coded |
| ● 3/7 | **Development** | Active coding |
| ● 4/7 | **Review** | Ready for QA and feedback |
| ● 5/7 | **Testing** | Integration testing |
| ● 6/7 | **Production** | Live — used by real users |
| ● 7/7 | **Maintenance** | Optimization and fixes |

`●` = active phase &nbsp;·&nbsp; `○` = not yet reached

---

## Standard Fields

Every file must have a header with these fields:

| Field | Example | Description |
|-------|---------|-------------|
| `FILE` | `layouts/partials/header.html` | Full path to the file |
| `PROJECT` | `Postbox.eu` | Project name |
| `PURPOSE` | `Navigation header for all pages` | What this file does |
| `CREATED BY` | `Jan Omel Nielsen` | Who created it |
| `FILE RESPONSIBLE` | `Jan Omel Nielsen` | Who owns it |
| `LAST MODIFIED BY` | `Jan Omel Nielsen` | Who changed it last |
| `LAST MODIFIED DATE` | `2026-04-25` | When it was last changed |
| `DATE AUDITED` | `2026-04-25` | When it was last reviewed |
| `AUDITED BY` | `Jan Omel Nielsen` | Who reviewed it |
| `VERSION` | `1.0` | Version number |
| `STATUS` | `● Production (Phase 6/7)` | Current phase |
| `PRODUCTION SINCE` | `2026-04-25` | When it went live *(production only)* |
| `TICKET` | `#042` | Issue/task reference |
| `DEADLINE` | `2026-05-15` | Deadline |
| `PRIORITY` | `High` | Critical / High / Medium / Low |
| `TAGS` | `navigation, header, partial` | Search keywords |
| `CHANGE LOG` | `Added responsive mobile menu` | Last change description |

---

## Roles

Three roles share responsibility for every file:

**Project Responsible**
Overview, priorities, deadlines.
Fills: `TICKET`, `DEADLINE`, `PRIORITY`

**Code Craftsman**
Coding and traceability.
Fills: `LAST MODIFIED BY`, `CHANGE LOG`, `TAGS`

**QA / Auditor**
Quality assurance and sign-off.
Fills: `DATE AUDITED`, `AUDITED BY`

---

## Comment Syntax by File Type

Headers are written in the comment style native to each file type:

| File type | Comment style |
|-----------|--------------|
| `.html` partials | `{{/* ... */}}` (Hugo template comments) |
| `.md` Markdown | `<!-- ... -->` |
| `.css` | `/* ... */` |
| `.js` | `/* ... */` |
| `.toml` | `# ...` |
| `.json` | `"_metadata": { ... }` (root field) |
| `.svg` | `<!-- ... -->` |
| `.yml` / `.yaml` | `# ...` |

---

## File Header Examples

### HTML partial (Hugo)

```
{{/*
    =================================================================
    FILE:               layouts/partials/header.html
    PROJECT:            Postbox.eu
    PURPOSE:            Navigation header for all pages

    CREATED BY:         Jan Omel Nielsen
    FILE RESPONSIBLE:   Jan Omel Nielsen
    LAST MODIFIED BY:   Jan Omel Nielsen
    LAST MODIFIED DATE: 2026-04-25

    DATE AUDITED:       2026-04-25
    AUDITED BY:         Jan Omel Nielsen

    VERSION:            1.0
    STATUS:             ○ Idea (Phase 1/7)
                        ○ Planning (Phase 2/7)
                        ○ Development (Phase 3/7)
                        ○ Review (Phase 4/7)
                        ○ Testing (Phase 5/7)
                        ● Production (Phase 6/7)
                        ○ Maintenance (Phase 7/7)
    PRODUCTION SINCE:   2026-04-25

    TICKET:             #042
    DEADLINE:           2026-05-01
    PRIORITY:           High
    TAGS:               navigation, header, partial
    CHANGE LOG:         Added responsive mobile menu
    =================================================================
    :::: Frea-X 2.0 — v0.0.42 | License to Innovate ::::
*/}}
```

### CSS file

```
/* ==========================================================================
   FILE:               assets/css/custom.css
   PROJECT:            Postbox.eu
   PURPOSE:            Core styling for the entire site

   CREATED BY:         Jan Omel Nielsen
   FILE RESPONSIBLE:   Jan Omel Nielsen
   LAST MODIFIED BY:   Jan Omel Nielsen
   LAST MODIFIED DATE: 2026-04-25

   DATE AUDITED:       2026-04-25
   AUDITED BY:         Jan Omel Nielsen

   VERSION:            1.0
   STATUS:             ● Production (Phase 6/7)

   TICKET:             #044
   PRIORITY:           High
   TAGS:               css, styling, variables, core
   CHANGE LOG:         Initial production release
   ========================================================================== */
```

### TOML configuration

```
# =================================================================
# FILE:               config/_default/hugo.toml
# PROJECT:            Postbox.eu
# PURPOSE:            Main Hugo configuration

# CREATED BY:         Jan Omel Nielsen
# FILE RESPONSIBLE:   Jan Omel Nielsen
# LAST MODIFIED BY:   Jan Omel Nielsen
# LAST MODIFIED DATE: 2026-04-25

# VERSION:            1.0
# STATUS:             ● Production (Phase 6/7)

# TICKET:             #041
# PRIORITY:           High
# TAGS:               hugo, config
# CHANGE LOG:         Initial production release
# =================================================================
```

### Markdown content file

```
<!--
    =================================================================
    FILE:               content/workflow.md
    PROJECT:            Frea-X
    PURPOSE:            Workflow documentation for users

    CREATED BY:         Jan Omel Nielsen
    FILE RESPONSIBLE:   Jan Omel Nielsen
    LAST MODIFIED BY:   Jan Omel Nielsen
    LAST MODIFIED DATE: 2026-05-05

    VERSION:            1.0
    STATUS:             ● Production (Phase 6/7)

    TICKET:             #060
    PRIORITY:           Medium
    TAGS:               docs, workflow, traceability
    CHANGE LOG:         Initial release
    =================================================================
-->
```

---

## How to Use It

1. **Copy** the relevant template from `templates/` to its destination
2. **Fill in** the header fields at the top of the file
3. **Update** `LAST MODIFIED BY` and `CHANGE LOG` every time you change something
4. **Update** `STATUS` when the file moves to a new phase
5. **Commit** to GitHub with a reference to `TICKET`

---

## Before You Commit — Checklist

```
📌 Did you update?

  ○  LAST MODIFIED BY
  ○  LAST MODIFIED DATE
  ○  CHANGE LOG
  ○  STATUS     (if phase changed)
  ○  VERSION    (if major change)
```

---

## The Philosophy

> *"Nothing is perfect, except death. Because it's hard to optimize."*
> — Jan Omel Nielsen, 2026

Frea-X Workflow is not bureaucracy.
It is craftsmanship applied to code.

*Frea-X 2.0 — v0.0.42 | Exploited by Geek The Viking | License to Innovate | "To infinity... and beyond, CyberSpace"*
