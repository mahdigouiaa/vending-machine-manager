import { useState, useEffect } from "react";
import ProductInfo from "../components/ProductInfo";
import AddProduct from "../components/AddProduct";
import { Col, Row } from "react-bootstrap";
import { data } from "react-router-dom";

function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } else {
      alert("Erreur lors de la suppression !");
    }
  };
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAdd = async (product) => {
    const newProducts = {
      id: Date.now(),
      name: product.nom,
      price: product.prix,
      available: product.dispo,
    };
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProducts),
    });

    const data = await response.json();
    setProducts((prev) => [...prev, data]);
  };

  return (
    <div className="dashboard">
      {" "}
      <AddProduct onAdd={handleAdd} />
      {isLoading ? (
        <p>Chargement des produits...</p>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={6} lg={4}>
              <ProductInfo
                name={product.name}
                price={product.price}
                available={product.available}
                onDelete={() => handleDelete(product.id)}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default DashboardPage;
