import { Navbar, Container, Nav, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function AppNavbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand>Vending Machine Manager</Navbar.Brand>
        {isLoggedIn && <span className="text-light ms-3">👋 Bienvenue !</span>}
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Accueil
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>
          {isLoggedIn ? (
            <Nav.Link
              onClick={() => {
                setIsLoggedIn(false);
                alert("🔓 Vous avez été déconnecté.");
              }}
            >
              Déconnexion
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/loginPage">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
