import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (userName === "" || password === "") {
      setMessage("❌ Veuillez remplir tous les champs !");
    } else {
      // 🔐 Simule une connexion (plus tard, on fera un fetch vers le backend)
      setIsLoggedIn(true);
      setMessage("✅ Connexion réussie !");
      navigate("/dashboard");
    }
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "30rem" }} className="p-4 shadow-sm">
        <h4 className="text-center mb-4 text-primary">Connexion</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nom d'utilisateur</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre identifiant"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" onClick={handleLogin}>
              🔐 Connexion
            </Button>
          </div>
        </Form>

        {message && (
          <Alert
            className="mt-3 text-center"
            variant={message.includes("réussie") ? "success" : "danger"}
          >
            {message}
          </Alert>
        )}
      </Card>
    </Container>
  );
}

export default LoginPage;
