import "../App.css";
import "../styles.css";
import { useState, useEffect, useRef } from "react";
import { Button, Card, Stack } from "react-bootstrap";

function ProductInfo(props) {
  const [isAvailable, setIsAvailable] = useState(props.available);
  const [changeCount, setChangeCount] = useState(0);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      setChangeCount((prev) => prev + 1);
    } else {
      hasMounted.current = true;
    }
  }, [isAvailable]);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Prix : {props.price} TND</Card.Text>
        <Card.Text>{isAvailable ? "✅ Disponible" : "❌ Épuisé"}</Card.Text>

        {changeCount > 3 && (
          <Card.Text style={{ color: "red" }}>
            ⚠️ Attention : Produit fréquemment modifié
          </Card.Text>
        )}

        <Stack direction="horizontal" gap={2}>
          <Button
            className="btn btn-equal "
            variant="warning"
            onClick={() => setIsAvailable(!isAvailable)}
          >
            Changer disponibilité
          </Button>
          <Button
            variant="danger"
            className="btn btn-equal "
            onClick={props.onDelete}
          >
            Supprimer
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ProductInfo;
