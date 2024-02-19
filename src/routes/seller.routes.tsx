import Dashboard from "../pages/Dashboard/Dashboard";
import ProductsList from "../pages/Dashboard/Seller/ProductList";
import SelesProduct from "../pages/Dashboard/Seller/SelesProduct";

export const sellerPaths = [
  { name: "Dashboard", path: "dashboard", element: <Dashboard /> },
  {
    name: "Products",
    path: "products",
    element: <ProductsList />,
  },
  {
    name: "Seels History",
    path: "seels-history",
    element: <SelesProduct />,
  },
];
