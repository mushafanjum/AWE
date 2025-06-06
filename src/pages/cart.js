// src/pages/cart.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaSearch,
} from "react-icons/fa";
import { CartContext } from "../context/cartContent";
import "./cart.css";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [, setShowAccountDropdown] = useState(false);
  const [total, setTotal] = useState(0);

  const topNavLinks = [
    "Gaming Simulators",
    "Styluses",
    "Household Batteries",
    "Power Banks",
    "Android Tablets",
    "Surveillance Systems",
    "Power & Charging Cables",
    "Speakers",
  ];

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  return (
    <div className="cart-container">
      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <h1 className="logo">AWE Electronics</h1>
        </div>

        <div className="header-center">
          <button className="shop-by-btn" onClick={() => navigate("/")}>
            <FaBars className="icon-bars" /> Shop By Category
          </button>
        </div>

        <div className="header-middle">
          <input
            type="text"
            className="search-input"
            placeholder="Search millions of deals..."
          />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>

        <div className="header-right">
          <div
            className="account-container"
            onMouseLeave={() => setShowAccountDropdown(false)}
          >
            <div
              className="account-button"
              onClick={() => setShowAccountDropdown((prev) => !prev)}
            >
              <FaUser className="icon" title="Account" />
              <span className="user-initials">MA</span>
            </div>

            {/* Optional dropdown if needed */}
          </div>

          <FaHeart className="icon" title="Wishlist" />
          <FaShoppingCart
            className="icon"
            title="Cart"
            onClick={() => navigate("/cart")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </header>

      {/* TOP NAV */}
      <nav className="top-nav">
        <ul>
          {topNavLinks.map((link, idx) => (
            <li key={idx}>{link}</li>
          ))}
        </ul>
      </nav>

      {/* MAIN CART CONTENT */}
      <main className="cart-main">
        <h2 className="cart-title">Shopping Cart</h2>

        {cartItems.length > 0 ? (
          <>
            {/* LIST OF ITEMS */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.img || "https://via.placeholder.com/100"}
                    alt={item.name}
                    className="item-img"
                  />
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* PAYMENT SECTION */}
            <div className="payment-section">
              <p className="total-text">Total: ${total.toFixed(2)}</p>
              <button
                className="payment-button"
                onClick={() => navigate("/all-products")}
              >
                Continue Shopping
              </button>
              <button
                className="payment-button"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Payment
              </button>
            </div>
          </>
        ) : (
          <div className="empty-cart-container">
            <p className="empty-cart-text">Your cart is currently empty</p>
            <p className="empty-subtext">Let’s find you an AWE Electronics deal</p>
            <button
              className="start-shopping-btn"
              onClick={() => navigate("/all-products")}
            >
              Start Shopping
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
