// ===============================================
// APPROUTER.JSX - Configuration du routage
// ===============================================

import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* /projects, /skills, /resume, /contact → même page, on scrollera vers la section */}
      <Route path="/:section" element={<Landing />} />
      {/* sécurité : toute autre route retombe sur la landing */}
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}