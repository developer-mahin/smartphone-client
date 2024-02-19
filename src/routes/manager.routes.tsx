import Dashboard from "../pages/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/Seller/AddProduct";
import ProductsList from "../pages/Dashboard/Seller/ProductList";

export const managerPaths = [
  { name: "Dashboard", path: "dashboard", element: <Dashboard /> },
  {
    name: "Products",
    path: "products",
    element: <ProductsList />,
  },
  {
    name: "Add Product",
    path: "add-product",
    element: <AddProduct />,
  },
];
