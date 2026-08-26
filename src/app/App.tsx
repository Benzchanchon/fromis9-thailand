import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MembersPage } from "../pages/MembersPage";
import { MemberProfilePage } from "../pages/MemberProfilePage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/members" element={<MembersPage />} />
      <Route path="/members/:slug" element={<MemberProfilePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
