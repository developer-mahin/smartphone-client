export const adminPaths = [
  { name: "Dashboard", path: "dashboard", element: "AdminDashboard" },
  {
    name: "User Management",
    children: [
      {
        name: "Create Manager",
        path: "create-manager",
        element: "<CreateManager />",
      },
      {
        name: "Create Seller",
        path: "create-seller",
        element: "<CreateSeller />",
      },
    ],
  },
];

const sidebarGenerator = adminPaths.reduce((acc, item) => {
  
}, []);

console.log(routeGenerator);
