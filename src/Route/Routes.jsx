/* import { useSelector } from "react-redux"; */
import { Route, Routes } from "react-router-dom";
import { Pages } from "../Pages/index";
/* import { ProtectedRoute } from "./ProtectedRoute"; */

function AppRoutes() {
  /*  const user = useSelector((state) => state.SliceAuth.isAuth); */
  return (
    <Routes>
      <Route path="/" element={<Pages.RenderMain />} />
      <Route path="*" element={<Pages.NotFound />} />
      {/*       <Route path="/profile/:id" element={<Pages.SellerProfile />} /> */}

      {/*       <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/profile/" element={<Pages.Profile />} />
      </Route> */}
    </Routes>
  );
}

export default AppRoutes;
