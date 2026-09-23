import json
from pathlib import Path

from app.schemas.news import NewsItem

# Phase 1 snapshot of all 15 src/data/news.ts records. No runtime frontend dependency.
_raw_news = json.loads(Path(__file__).with_name("news.json").read_text(encoding="utf-8"))
NEWS = tuple(NewsItem.model_validate(item) for item in _raw_news)
if len({item.slug for item in NEWS}) != len(NEWS):
    raise ValueError("Mock news slugs must be unique")
