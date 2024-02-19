import AllBranches from "../pages/Admin/BranchManagement/AllBranches";
import CreateBranch from "../pages/Admin/BranchManagement/CreateBranch";
import CreateManager from "../pages/Admin/UserManagement/CreateManager";
import CreateSeller from "../pages/Admin/UserManagement/CreateSeller";
import Managers from "../pages/Admin/UserManagement/Managers";
import Sellers from "../pages/Admin/UserManagement/Sellers";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/Seller/AddProduct";
import ProductsList from "../pages/Dashboard/Seller/ProductList";
import SelesProduct from "../pages/Dashboard/Seller/SelesProduct";

export const adminPaths = [
  { name: "Dashboard", path: "dashboard", element: <Dashboard /> },
  {
    name: "User Management",
    children: [
      {
        name: "Create Manager",
        path: "create-manager",
        element: <CreateManager />,
      },
      {
        name: "Create Seller",
        path: "create-seller",
        element: <CreateSeller />,
      },
      {
        name: "Managers",
        path: "managers-data",
        element: <Managers />,
      },
      {
        name: "Sellers",
        path: "sellers-data",
        element: <Sellers />,
      },
    ],
  },
  {
    name: "Product Management",
    children: [
      {
        name: "Add Product",
        path: "add-product",
        element: <AddProduct />,
      },
      {
        name: "Seels Product",
        path: "seels-product",
        element: <SelesProduct />,
      },
      {
        name: "Product",
        path: "products",
        element: <ProductsList />,
      },
    ],
  },
  {
    name: "Branch Management",
    children: [
      {
        name: "Add Branch",
        path: "create-branch",
        element: <CreateBranch />,
      },
      {
        name: "Branch Data",
        path: "branches",
        element: <AllBranches />,
      },
    ],
  },
];
