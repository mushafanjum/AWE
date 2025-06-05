// src/pages/productDetail.js

import React, { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import allProductsData from "./data/products"; // The array from step 2
import { CartContext } from "../context/cartContent"; // Make sure this exists
import "./productDetail.css";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-full-${i}`} className="star filled" />);
  }
  if (hasHalf) {
    stars.push(<FaStarHalfAlt key="star-half" className="star half" />);
  }
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`star-empty-${i}`} className="star empty" />);
  }
  return <>{stars}</>;
}

export default function ProductDetail() {
  // ─── Hooks must be at top ─────────────────────────────────────────
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  // ─── Find the product by id ───────────────────────────────────────
  const product = allProductsData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="detail-not-found">
        <p>Product not found.</p>
        <button onClick={() => navigate("/all-products")}>
          Back to All Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert(`${product.name} added to cart.`);
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate("/cart");
  };

  return (
    <div className="detail-container">
      <nav className="breadcrumb">
        <Link to="/home">Home</Link> &gt;{" "}
        <Link to="/all-products">All Products</Link> &gt;{" "}
        <span className="current">{product.name}</span>
      </nav>

      <div className="detail-content">
        {/* LEFT: Large image */}
        <div className="detail-image-wrapper">
          <img
            src={product.img}
            alt={product.name}
            className="detail-img"
            onError={(e) => (e.target.src = "https://via.placeholder.com/400")}
          />
        </div>

        {/* RIGHT: Product info */}
        <div className="detail-info">
          <h1 className="detail-name">{product.name}</h1>

          <div className="detail-rating">
            {renderStars(product.rating)}
            {product.reviewCount > 0 && (
              <span className="review-count">
                {" "}
                ({product.reviewCount} review
                {product.reviewCount > 1 ? "s" : ""})
              </span>
            )}
          </div>

          <div className="detail-price">
            {product.priceFrom
              ? `From $${product.price.toFixed(2)}`
              : `$${product.price.toFixed(2)}`}
          </div>

          {product.freeShipping && (
            <div className="detail-free-shipping">Free Shipping</div>
          )}
          {product.sponsored && (
            <div className="detail-sponsored">Sponsored</div>
          )}

          <div className="detail-quantity">
            <label htmlFor="qty">Quantity:</label>
            <select
              id="qty"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div className="detail-buttons">
            <button className="buy-now-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button className="add-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
