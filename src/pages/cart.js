import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaSearch,
  FaSignOutAlt,
  FaBoxOpen,
} from "react-icons/fa";
import "./cart.css";
import iphone12Img from "../images/iphone.png";


export default function Cart() {
  const navigate = useNavigate();

  // ─── State for the account dropdown ─────────────────────────────────
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  // ─── Sample data for the header’s topNav links ───────────────────────
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

  // ─── Sample cart items (id, name, price, image URL) ─────────────────
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 1299.99,
      img: iphone12Img,
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: 1199.99,
      img: iphone12Img,
    },
    {
      id: 3,
      name: "AirPods Pro 2nd Gen",
      price: 249.99,
      img: iphone12Img,
    },
  ]);

  // ─── Remove an item from the cart by id ─────────────────────────────
  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((it) => it.id !== itemId));
  };

  return (
    <div className="cart-container">
      {/* ── BACK BUTTON ─────────────────────────────────────────────────
      <div className="cart-back-wrapper">
        <button className="cart-back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div> */}

      {/* ─────────────────────────────────────────────────────────────────
         HEADER
         ───────────────────────────────────────────────────────────────── */}
      <header className="header">
        <div className="header-left">
          <h1 className="logo">AWE Electronics</h1>
        </div>

        {/* Shop By Category (no dropdown functionality here) */}
        <div className="header-center">
          <button
            className="shop-by-btn"
            onClick={() => {
              navigate("/");
            }}
          >
            <FaBars className="icon-bars" /> Shop By Category
          </button>
        </div>

        {/* Search Bar */}
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

        {/* Icons (right) */}
        <div className="header-right">
          {/* ACCOUNT ICON + INITIALS */}
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

            {showAccountDropdown && (
              <div className="account-dropdown">
                <div className="account-greeting">Hi Mushaf,</div>
                <div className="dropdown-separator" />

                <Link to="/my-details" className="dropdown-item">
                  <FaUser className="dropdown-icon" />
                  <span>My Details</span>
                </Link>

                <Link to="/my-purchases" className="dropdown-item">
                  <FaBoxOpen className="dropdown-icon" />
                  <span>My Purchases</span>
                </Link>

                <div
                  className="dropdown-item"
                  onClick={() => {
                    alert("Signing out...");
                    setShowAccountDropdown(false);
                    navigate("/");
                  }}
                >
                  <FaSignOutAlt className="dropdown-icon" />
                  <span>Sign Out</span>
                </div>
              </div>
            )}
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

      {/* ─────────────────────────────────────────────────────────────────
         TOP NAV LINKS
         ───────────────────────────────────────────────────────────────── */}
      <nav className="top-nav">
        <ul>
          {topNavLinks.map((link, idx) => (
            <li key={idx}>{link}</li>
          ))}
        </ul>
      </nav>

      {/* ─────────────────────────────────────────────────────────────────
         MAIN CONTENT
         ───────────────────────────────────────────────────────────────── */}
      <main className="cart-main">
        <h2 className="cart-title">Shopping Cart</h2>

        {cartItems.length > 0 ? (
          <>
            {/* ─── LIST OF ITEMS ──────────────────────────────────────────── */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  {/* Product image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="item-img"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100";
                    }}
                  />

                  {/* Product details */}
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                  </div>

                  {/* Remove button */}
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* ─── PAYMENT SECTION ────────────────────────────────────────── */}
            <div className="payment-section">
              <p className="total-text">
                Total: $
                {cartItems.reduce((sum, it) => sum + it.price, 0).toFixed(2)}
              </p>

              {/* Here we replace the alert with navigate("/checkout") */}
              <button
                className="payment-button"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Proceed to Payment
              </button>
            </div>
          </>
        ) : (
          /* ─── EMPTY STATE ────────────────────────────────────────────── */
          <div className="empty-cart-container">
            <p className="empty-cart-text">Your cart is currently empty</p>
            <p className="empty-subtext">
              Let’s find you an AWE Electronics deal
            </p>
            <button
              className="start-shopping-btn"
              onClick={() => navigate("/")}
            >
              Start Shopping
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
