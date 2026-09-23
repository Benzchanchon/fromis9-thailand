# Phase 1 — News API (local development only)

This backend serves the existing 15 News records. It has no database, authentication,
admin interface, or write endpoints. Home still reads the frontend static snapshot.
News and News Detail must have a running backend; they never fall back to local news.

## Run on Windows (two terminals)

Prerequisite: Python 3.10+ and the project's existing Node/pnpm setup.
These commands use the venv Python directly, so PowerShell script activation and
changing the execution policy are not necessary.

Terminal 1 — backend, first setup:

```powershell
cd D:\fromis9-thailand\backend
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8001
```

On subsequent runs, only the `cd` and `uvicorn` commands are needed.

Terminal 2 — frontend:

```powershell
cd D:\fromis9-thailand
pnpm.cmd install
if (!(Test-Path .env.local)) { Copy-Item .env.example .env.local }
pnpm.cmd dev --port 5173 --strictPort
```

Set `VITE_API_BASE_URL=http://localhost:8001` in `.env.local`. The service has the
same centralized local default. Restart Vite after changing an environment variable.
Vite's `VITE_` variables are public build-time configuration, not a place for secrets.
Keep any existing `VITE_SITE_URL` value. Production builds need a reachable API URL
configured separately; a static frontend deployment alone will not run FastAPI.
Deployment is outside this phase.

- Frontend: http://localhost:5173/news
- Health: http://localhost:8001/health
- Interactive API documentation: http://localhost:8001/docs
- OpenAPI contract: http://localhost:8001/openapi.json

The explicit port and `--strictPort` prevent Vite silently switching to another
origin that CORS does not allow. If 5173 is occupied, stop your other dev server or
intentionally update the backend's allowed origins. Do not open CORS to every origin.

## Routes and response contract

| Request | Response |
| --- | --- |
| `GET /health` | `200`, `{"status":"ok"}` |
| `GET /api/news` | `200`, a JSON array of all NewsItem objects, newest first |
| `GET /api/news/{slug}` | `200`, one complete NewsItem object |
| Unknown news slug | `404`, `{"detail":"News not found"}` |

Each object preserves the frontend's fields: `slug`, `title`, `date`, `category`,
`featured`, `image`, `imageAlt`, `summary`, `article`, `sourceName`, `sourceUrl`.
`article` is an array of paragraph strings; `featured` is a boolean; `date` is a
YYYY-MM-DD string. There is no response envelope or renamed field. Categories remain
Releases, Updates, Tour, Events, Other. Image/source URLs are unchanged.

Pydantic validates the JSON snapshot when the backend imports it and validates the
response contract. Duplicate slugs fail startup. Sorting is stable: same-date records
keep their snapshot order. No original records are reordered or mutated.

CORS permits only `http://localhost:5173` and `http://127.0.0.1:5173`, GET requests,
and the Accept header. Credentials are disabled. Middleware handles CORS preflight.
See the [FastAPI CORS guide](https://fastapi.tiangolo.com/tutorial/cors/).

## Understand the data flow

```text
/news
  -> useNewsRequest(getNews)
  -> services/newsApi.ts: HTTP GET /api/news
  -> FastAPI app -> news router -> validated mock News objects
  -> JSON response -> React success state -> existing News UI
```

An HTTP request crosses from the frontend process (5173) to the Python process
(8001). JSON carries data, not React components. React receives that data and renders
the same cards as before. Category filtering and Load More remain in the frontend
(6 initial records, then batches of 6). The newest featured record supplies the hero.

```text
/news/:slug
  -> getNewsDetail starts two requests in parallel:
       GET /api/news/{slug} -> selected article
       GET /api/news        -> related / previous / next candidates
  -> React state -> existing article UI
  -> pure utils/news.ts selectors calculate navigation from API records
```

Related items prioritize the same category, then other categories, newest first.
Previous means the immediately newer item; Next means the immediately older item.
The first/last article keeps the existing disabled navigation state. Read More stays
internal; View Original Source remains an external `sourceUrl` link.

Loading uses a quiet Thai status message. Network/server errors, malformed JSON or
an incompatible response show a friendly Thai alert and a keyboard-accessible retry
button. Requests time out after 15 seconds. Navigation cancels stale requests;
changing a slug resets the article state. A detail-endpoint 404 redirects to `/news`;
other failures remain visible. There is no silent static-data fallback.

## Temporary snapshots and file ownership

- `app/data/news.json`: exact Phase 1 copy of the 15 frontend records.
- `app/data/mock_news.py`: reads JSON and validates it as Pydantic NewsItem objects.
- `app/schemas/news.py`: API contract matching `src/types/content.ts`.
- `app/routers/news.py`: read-only list/detail handlers.
- `app/main.py`: app, local CORS, health route.
- `src/data/news.ts`: retained for Home Latest News and migration reference.
- `src/data/newsPresentation.ts`: labels/categories only, no news records.
- `src/utils/news.ts`: selectors accepting supplied records, no local-content imports.
- `src/services/newsApi.ts`: centralized URL, fetch, response checks, timeout/errors.
- `src/hooks/useNewsRequest.ts`: loading/success/error state, cancellation and retry.

The two content snapshots do not automatically synchronize. Do not edit one and
assume the other changed. A later phase will migrate Home and remove this temporary
duplication. The backend never reads TypeScript at runtime. No other feature migrated.

## Test locally

With the backend running:

```powershell
Invoke-RestMethod http://localhost:8001/health
Invoke-RestMethod http://localhost:8001/api/news
Invoke-RestMethod http://localhost:8001/api/news/fromis9-2026-asia-tour-tomorrow-glow-seoul
curl.exe -i http://localhost:8001/api/news/non-existent-slug
```

The final command should return HTTP 404, not an empty success object.

Automated backend tests (no running server required):

```powershell
cd D:\fromis9-thailand\backend
.\.venv\Scripts\python.exe -m pip install -r requirements-dev.txt
.\.venv\Scripts\python.exe -m unittest discover -s tests -v
```

Frontend checks:

```powershell
cd D:\fromis9-thailand
pnpm.cmd typecheck
pnpm.cmd build
```

In the browser, check all News filters, Load More (6 -> 12 -> 15), an article's source
button and related/previous/next links. Stop the backend, reload News, and verify the
error with no static cards. Restart it and click Retry. Home should still show its
three static news cards even while the backend is stopped. External images still
depend on the existing third-party host's availability.
