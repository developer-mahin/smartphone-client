import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChangePassword from "../pages/ChangePassword";
import Login from "../pages/Login/Login";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import ProtectedRoutes from "./ProtectedRoutes";
import { sellerPaths } from "./seller.routes";
import { managerPaths } from "./manager.routes";

const router = createBrowserRouter([
  {
    index: true,
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },

  {
    path: "/superAdmin",
    element: (
      <ProtectedRoutes role="superAdmin">
        <App />
      </ProtectedRoutes>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/seller",
    element: (
      <ProtectedRoutes role="seller">
        <App />
      </ProtectedRoutes>
    ),
    children: routeGenerator(sellerPaths),
  },
  {
    path: "/manager",
    element: (
      <ProtectedRoutes role="manager">
        <App />
      </ProtectedRoutes>
    ),
    children: routeGenerator(managerPaths),
  },
]);

export default router;
