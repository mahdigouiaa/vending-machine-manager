import DashboardPage from "./DashboardPage";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom"; // importer Routes et Route
import ProtectedRoute from "./ProtectedRout";
function RoutesApp() {
  const appRoutes = [
    {
      path: "/",
      label: "Acceuil",
      element: <HomePage />,
    },
    {
      path: "/dashboard",
      label: "Dashboard",
      element: (
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/loginPage",
      label: "LoginPage",
      element: <LoginPage />,
    },
  ];
  return (
    <Routes>
      {appRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default RoutesApp;
