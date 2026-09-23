import unittest

from fastapi.testclient import TestClient

from app.data.mock_news import NEWS
from app.main import app


class NewsApiTests(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)

    def test_health_and_docs(self):
        self.assertEqual(self.client.get("/health").json(), {"status": "ok"})
        self.assertEqual(self.client.get("/docs").status_code, 200)

    def test_list_content_order_and_contract(self):
        response = self.client.get("/api/news")
        self.assertEqual(response.status_code, 200)
        expected = sorted(NEWS, key=lambda item: item.date, reverse=True)
        self.assertEqual(response.json(), [item.model_dump() for item in expected])
        self.assertEqual(len(response.json()), 15)
        self.assertEqual(len({item.slug for item in NEWS}), 15)

    def test_every_detail_preserves_all_fields(self):
        for item in NEWS:
            with self.subTest(slug=item.slug):
                response = self.client.get(f"/api/news/{item.slug}")
                self.assertEqual(response.status_code, 200)
                self.assertEqual(response.json(), item.model_dump())

    def test_unknown_slug(self):
        response = self.client.get("/api/news/non-existent-slug")
        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json(), {"detail": "News not found"})

    def test_cors(self):
        for origin in ["http://localhost:5173", "http://127.0.0.1:5173"]:
            response = self.client.options("/api/news", headers={
                "Origin": origin, "Access-Control-Request-Method": "GET",
            })
            self.assertEqual(response.status_code, 200)
            self.assertEqual(response.headers["access-control-allow-origin"], origin)
        response = self.client.get("/api/news", headers={"Origin": "https://example.com"})
        self.assertNotIn("access-control-allow-origin", response.headers)
        response = self.client.options("/api/news", headers={
            "Origin": "http://localhost:5173", "Access-Control-Request-Method": "POST",
        })
        self.assertEqual(response.status_code, 400)

    def test_no_write_routes(self):
        self.assertEqual(self.client.post("/api/news", json={}).status_code, 405)


if __name__ == "__main__":
    unittest.main()
