from datetime import date
from typing import Literal

from pydantic import BaseModel, ConfigDict, field_validator


class NewsItem(BaseModel):
    """Camel-case fields intentionally match src/types/content.ts."""
    model_config = ConfigDict(extra="forbid", strict=True)

    slug: str
    title: str
    date: str
    category: Literal["Releases", "Updates", "Tour", "Events", "Other"]
    featured: bool
    image: str
    imageAlt: str
    summary: str
    article: list[str]
    sourceName: str
    sourceUrl: str

    @field_validator("date")
    @classmethod
    def valid_date(cls, value: str) -> str:
        if date.fromisoformat(value).isoformat() != value:
            raise ValueError("Date must use YYYY-MM-DD")
        return value
