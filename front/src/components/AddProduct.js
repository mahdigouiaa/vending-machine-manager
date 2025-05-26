import { useState } from "react";
import {
  Card,
  Form,
  Button,
  Alert,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function AddProduct(props) {
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState(0);
  const [dispo, setDispo] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (nom === "" || prix <= 0) {
      setMessage("❌ Veuillez remplir tous les champs !");
    } else {
      const newP = { nom, prix, dispo };
      props.onAdd(newP);
      setMessage("✅ Produit ajouté avec succès");
      setNom("");
      setPrix(0);
      setDispo(false);
    }
  };

  return (
    <Card className="p-4 shadow-sm mb-4">
      <h4 className="mb-4 text-center text-primary">Ajouter un produit</h4>
      <Form>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Nom du produit"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Prix (TND)</Form.Label>
              <Form.Control
                type="number"
                value={prix}
                onChange={(e) => setPrix(Number(e.target.value))}
                placeholder="Ex: 2.5"
              />
            </Form.Group>
          </Col>
          <Col md={4} className="d-flex align-items-center pt-3">
            <Form.Check
              type="checkbox"
              label="Disponible"
              checked={dispo}
              onChange={(e) => setDispo(e.target.checked)}
            />
          </Col>
        </Row>
        <div className="text-center">
          <Button variant="success" onClick={handleClick}>
            ➕ Ajouter le produit
          </Button>
        </div>
      </Form>

      {message && (
        <Alert
          variant={message.includes("ajouté") ? "success" : "danger"}
          className="mt-4 text-center"
        >
          {message}
        </Alert>
      )}
    </Card>
  );
}

export default AddProduct;
