import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import distributeurImg from "./achat-location-distributeur.jpg";
function HomePage() {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="mb-4 text-primary">Bienvenue 👋</h1>
            <p className="lead">
              Gérer facilement vos distributeurs automatiques grâce à notre
              outil simple et intuitif.
            </p>
            <p>
              Suivez l’état de vos produits, ajoutez-en de nouveaux et
              surveillez les disponibilités, le tout depuis un tableau de bord
              interactif.
            </p>
            <Button
              as={Link}
              to="/dashboard"
              variant="primary"
              className="mt-3"
            >
              Accéder au Dashboard
            </Button>
          </Col>
          <Col md={6}>
            <img
              src={distributeurImg}
              alt="Distributeur automatique"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
