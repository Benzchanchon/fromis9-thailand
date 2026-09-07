import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MembersPage } from "../pages/MembersPage";
import { MemberProfilePage } from "../pages/MemberProfilePage";
import { NewsDetailPage } from "../pages/NewsDetailPage";
import { NewsPage } from "../pages/NewsPage";
import { PerformancesPage } from "../pages/PerformancesPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/members" element={<MembersPage />} />
      <Route path="/members/:slug" element={<MemberProfilePage />} />
      <Route path="/performances" element={<PerformancesPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:slug" element={<NewsDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
