// src/pages/Products.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import products from "./data/products"; // <-- IMPORT THE ARRAY, but export the component below
import "./home.css"; // reuses your grid styling

export default function Products() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = params.get("category"); // e.g. "Smartphones"

  // Filter products by category if provided
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="home-container">
      <section className="right-section">
        <h2>{category ? category : "All"} Products</h2>
        <div className="grid-container">
          {filtered.map((prod) => (
            <Link
              key={prod.id}
              to={`/products/${prod.id}`}
              className="grid-card"
            >
              <img src={prod.img} alt={prod.name} className="grid-img" />
              <div className="grid-label">{prod.name}</div>
              <div className="grid-price">${prod.price.toFixed(2)}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
