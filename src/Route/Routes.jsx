import { Route, Routes } from "react-router-dom";
import { Pages } from "../Pages/index";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pages.RenderMain />} />
      <Route path="*" element={<Pages.NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
