from fastapi import APIRouter, HTTPException

from app.data.mock_news import NEWS
from app.schemas.news import NewsItem

router = APIRouter(prefix="/api/news", tags=["news"])


@router.get("", response_model=list[NewsItem])
def get_news() -> list[NewsItem]:
    # Python's stable sort preserves source order for matching dates.
    return sorted(NEWS, key=lambda item: item.date, reverse=True)


@router.get("/{slug}", response_model=NewsItem)
def get_news_by_slug(slug: str) -> NewsItem:
    for item in NEWS:
        if item.slug == slug:
            return item
    raise HTTPException(status_code=404, detail="News not found")
