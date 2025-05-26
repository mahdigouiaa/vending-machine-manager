import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const products = [
  { id: 2, name: "Soda", price: 2.5, available: false },
  { id: 3, name: "Snack", price: 2, available: true },
];
app.get("/", (req, res) => {
  res.send("API en ligne");
});
app.get("/products", (req, res) => {
  res.json(products);
});
app.listen(3001, () => {
  console.log("Serveur démarré sur http://localhost:3001 ");
});
app.post("/products", (req, res) => {
  const newProduct = req.body;

  if (!newProduct.name || !newProduct.price) {
    return res.status(400).json({ message: "Champs requis manquants" });
  }

  newProduct.id = Date.now(); // génère un ID unique
  products.push(newProduct); // ajoute au tableau local

  res.status(201).json(newProduct); // retourne l'objet ajouté
});
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id); // 1. on récupère l'ID depuis l'URL
  const index = products.findIndex((p) => p.id === id); // 2. on cherche sa position

  if (index === -1) {
    return res.status(404).json({ message: "Produit non trouvé" });
  }

  products.splice(index, 1); // 3. on supprime depuis le tableau
  res.json({ message: "Produit supprimé" }); // 4. on confirme la suppression
});
