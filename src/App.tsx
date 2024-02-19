import { MainLayout } from "./components/layout/MainLayout";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <ProtectedRoutes role={undefined}>
      <MainLayout />
    </ProtectedRoutes>
  );
}

export default App;
