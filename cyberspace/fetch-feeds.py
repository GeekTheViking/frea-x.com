#!/usr/bin/env python3
"""
fetch-feeds.py — Frea-X Cyberspace RSS aggregator
Henter alle aktive feeds fra sources.json og gemmer til ../static/data/feed-cache.json
Viser nyheder fra de seneste 42 timer. Køres af GitHub Actions kl. :42 hvert time.
"""

import json
import os
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta
from email.utils import parsedate_to_datetime
from urllib.request import urlopen, Request
from html import unescape
import re

SOURCES_FILE = "sources.json"
CACHE_FILE   = "../static/data/feed-cache.json"
MAX_PER_FEED = 15
WINDOW_HOURS = 42
TIMEOUT      = 10

UA = "Mozilla/5.0 (FreaX-Cyberspace/1.0; +https://frea-x.com/cyberspace)"

def clean(text):
    if not text:
        return ""
    text = unescape(text)
    text = re.sub(r'<[^>]+>', '', text)
    return text.strip()

def parse_date(date_str):
    if not date_str:
        return None
    try:
        return parsedate_to_datetime(date_str)
    except Exception:
        pass
    try:
        return datetime.fromisoformat(date_str.replace('Z', '+00:00'))
    except Exception:
        pass
    return None

def fetch_feed(url):
    try:
        req = Request(url, headers={"User-Agent": UA})
        with urlopen(req, timeout=TIMEOUT) as r:
            return r.read()
    except Exception as e:
        print(f"  ⚠ Fejl ved {url}: {e}")
        return None

def parse_feed(data, category_id, source_name, lang, cutoff):
    items = []
    try:
        root = ET.fromstring(data)

        if root.tag == "rss" or root.tag.endswith("}rss"):
            channel = root.find("channel")
            entries = channel.findall("item") if channel else []
            for entry in entries:
                pub_str = entry.findtext("pubDate", "")
                pub_dt  = parse_date(pub_str)
                if pub_dt and pub_dt < cutoff:
                    continue
                title = clean(entry.findtext("title", ""))
                link  = clean(entry.findtext("link", ""))
                desc  = clean(entry.findtext("description", ""))[:120]
                if not title:
                    continue
                items.append({
                    "title":    title,
                    "link":     link,
                    "desc":     desc,
                    "source":   source_name,
                    "category": category_id,
                    "lang":     lang,
                    "pub":      pub_str,
                    "fetched":  datetime.now(timezone.utc).isoformat()
                })
                if len(items) >= MAX_PER_FEED:
                    break
        else:
            entries = root.findall("{http://www.w3.org/2005/Atom}entry")
            for entry in entries:
                pub_str = entry.findtext("{http://www.w3.org/2005/Atom}updated", "")
                pub_dt  = parse_date(pub_str)
                if pub_dt and pub_dt < cutoff:
                    continue
                title   = clean(entry.findtext("{http://www.w3.org/2005/Atom}title", ""))
                link_el = entry.find("{http://www.w3.org/2005/Atom}link")
                link    = link_el.get("href", "") if link_el is not None else ""
                summary = clean(entry.findtext("{http://www.w3.org/2005/Atom}summary", ""))[:120]
                if not title:
                    continue
                items.append({
                    "title":    title,
                    "link":     link,
                    "desc":     summary,
                    "source":   source_name,
                    "category": category_id,
                    "lang":     lang,
                    "pub":      pub_str,
                    "fetched":  datetime.now(timezone.utc).isoformat()
                })
                if len(items) >= MAX_PER_FEED:
                    break
    except Exception as e:
        print(f"  ⚠ Parse fejl ({source_name}): {e}")
    return items

def main():
    cutoff = datetime.now(timezone.utc) - timedelta(hours=WINDOW_HOURS)
    print(f"\n🚀 Frea-X Cyberspace — {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"   Viser nyheder fra de seneste {WINDOW_HOURS} timer (siden {cutoff.strftime('%d/%m %H:%M')} UTC)")
    print("=" * 60)

    with open(SOURCES_FILE) as f:
        sources = json.load(f)

    all_items = []
    stats = {"feeds_ok": 0, "feeds_fail": 0}

    for category in sources["categories"]:
        cat_id       = category["id"]
        active_feeds = [f for f in category["feeds"] if f.get("active", False)]
        if not active_feeds:
            continue
        print(f"\n  {category['icon']} {category['label']} ({len(active_feeds)} feeds)")
        for feed in active_feeds:
            print(f"    → {feed['name']}", end=" ")
            data = fetch_feed(feed["url"])
            if data:
                items = parse_feed(data, cat_id, feed["name"], feed.get("lang", "en"), cutoff)
                all_items.extend(items)
                stats["feeds_ok"] += 1
                print(f"✓ ({len(items)} items inden for {WINDOW_HOURS}t)")
            else:
                stats["feeds_fail"] += 1
                print("✗")

    os.makedirs(os.path.dirname(CACHE_FILE), exist_ok=True)
    cache = {
        "generated":   datetime.now(timezone.utc).isoformat(),
        "window_hours": WINDOW_HOURS,
        "feeds_ok":    stats["feeds_ok"],
        "feeds_fail":  stats["feeds_fail"],
        "total_items": len(all_items),
        "items":       all_items
    }

    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

    print(f"\n{'='*60}")
    print(f"✅ Færdig — {len(all_items)} items fra de seneste {WINDOW_HOURS} timer")
    print(f"   Feeds OK: {stats['feeds_ok']} / Fejl: {stats['feeds_fail']}")

if __name__ == "__main__":
    main()
