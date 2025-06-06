// src/pages/checkout.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContent";
import "./checkout.css";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const [orderItems, setOrderItems] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    PostalCode: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [error, setError] = useState("");

  // ─────────────────────────────────────────────────────
  // 🧠 Load cart or one-time "Buy Now" item
  useEffect(() => {
    const singleItem = JSON.parse(localStorage.getItem("checkoutItem"));
    if (singleItem) {
      setOrderItems([{ ...singleItem, quantity: 1 }]);
      localStorage.removeItem("checkoutItem");
    } else {
      setOrderItems(cartItems);
    }
  }, [cartItems]);

  // ─────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const {
      fullName,
      email,
      address,
      city,
      state,
      PostalCode,
      cardNumber,
      expiry,
      cvv,
    } = formData;

    // Validation
    if (!fullName.trim()) return setError("Full Name is required.");
    if (!email.trim()) return setError("Email Address is required.");
    if (!address.trim()) return setError("Street Address is required.");
    if (!city.trim()) return setError("City is required.");
    if (!state.trim()) return setError("State is required.");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return setError("Please enter a valid email address.");
    const PostalCodeRegex = /^\d{4}$/;
    if (!PostalCodeRegex.test(PostalCode)) return setError("Postal Code must be 4 digits.");
    const cardRegex = /^\d{16}$/;
    if (!cardRegex.test(cardNumber.replace(/\s+/g, ""))) return setError("Card Number must be 16 digits.");
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(expiry)) return setError("Expiry must be MM/YY.");
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) return setError("CVV must be 3 digits.");

    alert("Order placed! Thank you for your purchase.");
    navigate("/home");
  };

  // ─────────────────────────────────────────────────────
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 49.99;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  return (
    <div className="checkout-container">
      <div className="cart-back-wrapper">
        <button className="cart-back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
      <h2 className="checkout-title">Checkout</h2>

      {/* Optional Banner */}
      {orderItems.length === 1 && !cartItems.some(p => p.id === orderItems[0].id) && (
        <div className="info-banner">
          You're checking out a single item.
          <button onClick={() => navigate("/cart")}>Go to Cart</button>
        </div>
      )}

      <div className="checkout-content">
        {/* Form Section */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          {error && <div className="error-msg">{error}</div>}
          <h3 className="section-heading">Billing & Shipping Details</h3>

          <div className="input-group">
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder=" " />
            <label htmlFor="fullName">Full Name</label>
          </div>

          <div className="input-group">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="input-group">
            <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder=" " />
            <label htmlFor="address">Street Address</label>
          </div>

          <div className="row-group">
            <div className="input-group small">
              <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder=" " />
              <label htmlFor="city">City</label>
            </div>
            <div className="input-group small">
              <input type="text" name="state" value={formData.state} onChange={handleChange} required placeholder=" " />
              <label htmlFor="state">State</label>
            </div>
            <div className="input-group small">
              <input type="text" name="PostalCode" value={formData.PostalCode} onChange={handleChange} required placeholder=" " maxLength={4} />
              <label htmlFor="PostalCode">Postal Code</label>
            </div>
          </div>

          <h3 className="section-heading">Payment Details</h3>

          <div className="input-group">
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={(e) => setFormData(prev => ({ ...prev, cardNumber: e.target.value.replace(/\D/g, "") }))} required placeholder=" " maxLength={16} />
            <label htmlFor="cardNumber">Card Number</label>
          </div>

          <div className="row-group">
            <div className="input-group small">
              <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} required placeholder=" " maxLength={5} />
              <label htmlFor="expiry">Expiry Date (MM/YY)</label>
            </div>
            <div className="input-group small">
              <input type="password" name="cvv" value={formData.cvv} onChange={(e) => setFormData(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, "") }))} required placeholder=" " maxLength={3} />
              <label htmlFor="cvv">CVV</label>
            </div>
          </div>

          <button type="submit" className="place-order-btn">Place Order</button>
        </form>

        {/* Order Summary Section */}
        <aside className="order-summary">
          <h3 className="section-heading">Order Summary</h3>
          <div className="summary-items">
            {orderItems.map((item) => (
              <div key={item.id} className="summary-item">
                <div className="summary-item-info">
                  <p className="summary-item-name">{item.name}</p>
                  <p className="summary-item-qty">Qty: {item.quantity}</p>
                </div>
                <p className="summary-item-price">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="summary-divider" />
          <div className="summary-totals">
            <div className="summary-line"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="summary-line"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
            <div className="summary-line"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
            <div className="summary-line total-line"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>
        </aside>
      </div>
    </div>
  );
}
