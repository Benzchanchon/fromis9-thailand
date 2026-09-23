from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.news import router as news_router

app = FastAPI(title="fromis_9 Thailand — Phase 1 News API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["Accept"],
)
app.include_router(news_router)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
