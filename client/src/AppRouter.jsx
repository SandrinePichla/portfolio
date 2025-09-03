// ===============================================
// APPROUTER.JSX - Configuration du routage
// ===============================================

import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* Exemple futur : <Route path="/project/:slug" element={<ProjectDetail />} /> */}
    </Routes>
  );
}