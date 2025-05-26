import "./App.css";
import "./styles.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, BrowserRouter } from "react-router-dom";
import RoutesApp from "./pages/RoutesApp";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import AppNavbar from "./components/AppNavbar";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppNavbar />
        <RoutesApp />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
