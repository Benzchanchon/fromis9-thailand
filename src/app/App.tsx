import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MembersPage } from "../pages/MembersPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/members" element={<MembersPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
