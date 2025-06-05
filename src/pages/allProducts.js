// src/pages/allProducts.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronDown,
} from "react-icons/fa";
import allProductsData from "./data/products";
import "./allProducts.css";

// Helper to render star icons (0–5 with halves)
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

export default function AllProducts() {
  const sortOptions = [
    "Recommended",
    "Price: Low to High",
    "Price: High to Low",
    "Customer Rating",
  ];
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="all-products-container">
      {/* ── BACK TO HOME ─────────────────────────────────────────────── */}
      <div className="back-home">
        <Link to="/">← Back to Home</Link>
      </div>

      {/* ── HEADER: Total Count + Sort Dropdown ─────────────────────── */}
      <div className="products-header">
        <div className="total-count">12,000+ products</div>
        <div className="sort-by">
          <span>Sort By:</span>
          <div
            className="sort-dropdown"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <span>{sortBy}</span>
            <FaChevronDown className="icon-chevron" />
            {dropdownOpen && (
              <ul className="sort-options">
                {sortOptions.map((opt) => (
                  <li
                    key={opt}
                    className={opt === sortBy ? "active" : ""}
                    onClick={() => {
                      setSortBy(opt);
                      setDropdownOpen(false);
                    }}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID ──────────────────────────────────────────────── */}
      <div className="products-grid">
        {allProductsData.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="product-card"
          >
            {/* Price Drop Ribbon */}
            {product.priceDrop && (
              <div className="ribbon ribbon-top-left">
                <span>Price Drop</span>
              </div>
            )}

            {/* Product Image */}
            <div className="image-wrapper">
              <img
                src={product.img}
                alt={product.name}
                className="product-img"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/200";
                }}
              />
            </div>

            {/* Free Shipping Badge */}
            {product.freeShipping && (
              <div className="free-shipping">Free Shipping</div>
            )}

            {/* Product Name */}
            <div className="product-name">{product.name}</div>

            {/* Price Tag */}
            <div className={`price-tag ${product.priceFrom ? "from" : ""}`}>
              {product.priceFrom
                ? "From $" + product.price.toFixed(2)
                : "$" + product.price.toFixed(2)}
            </div>

            {/* Star Rating */}
            <div className="rating">
              {renderStars(product.rating)}
              <span className="review-count">({product.reviewCount})</span>
            </div>

            {/* Sponsored Label */}
            {product.sponsored && (
              <div className="sponsored-label">Sponsored</div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
