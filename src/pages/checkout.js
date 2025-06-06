// // src/Checkout.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./checkout.css";

// export default function Checkout() {

//   const navigate = useNavigate();
  
//   // Sample data for order summary (replace with real data as needed)
//   const orderItems = [
//     { id: 1, name: "iPhone 15 Pro", quantity: 1, price: 1299.99 },
//     { id: 2, name: "MacBook Air M2", quantity: 1, price: 1199.99 },
//     { id: 3, name: "AirPods Pro 2nd Gen", quantity: 1, price: 249.99 },
//   ];

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Integrate with payment gateway
//     alert("Order placed! Thank you for your purchase.");
//     navigate("/home");
//   };

//   // Calculate totals
//   const subtotal = orderItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const shipping = 49.99; // Flat shipping rate for example
//   const tax = +(subtotal * 0.08).toFixed(2); // 8% tax example
//   const total = +(subtotal + shipping + tax).toFixed(2);

//   return (
//     <div className="checkout-container">
//       {/* ── BACK BUTTON ───────────────────────────────────────────────── */}
//       <div className="cart-back-wrapper">
//         <button className="cart-back-btn" onClick={() => navigate(-1)}>
//           ← Back
//         </button>
//       </div>
//       <h2 className="checkout-title">Checkout</h2>
//       <div className="checkout-content">
//         {/* ─── LEFT COLUMN: Billing & Payment Form ──────────────────────── */}
//         <form className="checkout-form" onSubmit={handleSubmit}>
//           <h3 className="section-heading">Billing & Shipping Details</h3>

//           {/* Full Name */}
//           <div className="input-group">
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//               placeholder=" "
//             />
//             <label htmlFor="fullName">Full Name</label>
//           </div>

//           {/* Email */}
//           <div className="input-group">
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder=" "
//             />
//             <label htmlFor="email">Email Address</label>
//           </div>

//           {/* Address */}
//           <div className="input-group">
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//               placeholder=" "
//             />
//             <label htmlFor="address">Street Address</label>
//           </div>

//           <div className="row-group">
//             {/* City */}
//             <div className="input-group small">
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//               />
//               <label htmlFor="city">City</label>
//             </div>

//             {/* State */}
//             <div className="input-group small">
//               <input
//                 type="text"
//                 id="state"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//               />
//               <label htmlFor="state">State</label>
//             </div>

//             {/* Zip */}
//             <div className="input-group small">
//               <input
//                 type="text"
//                 id="zip"
//                 name="zip"
//                 value={formData.zip}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//               />
//               <label htmlFor="zip">ZIP Code</label>
//             </div>
//           </div>

//           <h3 className="section-heading">Payment Details</h3>

//           {/* Card Number */}
//           <div className="input-group">
//             <input
//               type="text"
//               id="cardNumber"
//               name="cardNumber"
//               value={formData.cardNumber}
//               onChange={handleChange}
//               required
//               placeholder=" "
//               maxLength={19}
//             />
//             <label htmlFor="cardNumber">Card Number</label>
//           </div>

//           <div className="row-group">
//             {/* Expiry */}
//             <div className="input-group small">
//               <input
//                 type="text"
//                 id="expiry"
//                 name="expiry"
//                 value={formData.expiry}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//                 maxLength={5}
//               />
//               <label htmlFor="expiry">Expiry Date (MM/YY)</label>
//             </div>

//             {/* CVV */}
//             <div className="input-group small">
//               <input
//                 type="password"
//                 id="cvv"
//                 name="cvv"
//                 value={formData.cvv}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//                 maxLength={3}
//               />
//               <label htmlFor="cvv">CVV</label>
//             </div>
//           </div>

//           <button type="submit" className="place-order-btn">
//             Place Order
//           </button>
//         </form>

//         {/* ─── RIGHT COLUMN: Order Summary ──────────────────────────────── */}
//         <aside className="order-summary">
//           <h3 className="section-heading">Order Summary</h3>
//           <div className="summary-items">
//             {orderItems.map((item) => (
//               <div key={item.id} className="summary-item">
//                 <div className="summary-item-info">
//                   <p className="summary-item-name">{item.name}</p>
//                   <p className="summary-item-qty">Qty: {item.quantity}</p>
//                 </div>
//                 <p className="summary-item-price">
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </p>
//               </div>
//             ))}
//           </div>
//           <div className="summary-divider" />

//           <div className="summary-totals">
//             <div className="summary-line">
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className="summary-line">
//               <span>Shipping</span>
//               <span>${shipping.toFixed(2)}</span>
//             </div>
//             <div className="summary-line">
//               <span>Tax</span>
//               <span>${tax.toFixed(2)}</span>
//             </div>
//             <div className="summary-line total-line">
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// // // Helper values outside component
// // const shipping = 49.99;
// // const orderItems = [
// //   { id: 1, name: "iPhone 15 Pro", quantity: 1, price: 1299.99 },
// //   { id: 2, name: "MacBook Air M2", quantity: 1, price: 1199.99 },
// //   { id: 3, name: "AirPods Pro 2nd Gen", quantity: 1, price: 249.99 },
// // ];
// // const subtotal = orderItems.reduce(
// //   (sum, item) => sum + item.price * item.quantity,
// //   0
// // );
// // const tax = +(subtotal * 0.08).toFixed(2);
// // const total = +(subtotal + shipping + tax).toFixed(2);

// src/Checkout.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

export default function Checkout() {
  const navigate = useNavigate();

  // Sample data for order summary (replace with real data as needed)
  const orderItems = [
    { id: 1, name: "iPhone 15 Pro", quantity: 1, price: 1299.99 },
    { id: 2, name: "MacBook Air M2", quantity: 1, price: 1199.99 },
    { id: 3, name: "AirPods Pro 2nd Gen", quantity: 1, price: 249.99 },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [error, setError] = useState("");

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
      zip,
      cardNumber,
      expiry,
      cvv,
    } = formData;

    // Basic non-empty checks
    if (!fullName.trim()) {
      setError("Full Name is required.");
      return;
    }
    if (!email.trim()) {
      setError("Email Address is required.");
      return;
    }
    if (!address.trim()) {
      setError("Street Address is required.");
      return;
    }
    if (!city.trim()) {
      setError("City is required.");
      return;
    }
    if (!state.trim()) {
      setError("State is required.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // ZIP code: exactly 5 digits
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(zip)) {
      setError("ZIP Code must be 5 digits.");
      return;
    }

    // Card number: exactly 16 digits
    const cardRegex = /^\d{16}$/;
    if (!cardRegex.test(cardNumber.replace(/\s+/g, ""))) {
      setError("Card Number must be 16 digits.");
      return;
    }

    // Expiry: MM/YY format, MM between 01-12
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(expiry)) {
      setError("Expiry Date must be in MM/YY format.");
      return;
    }

    // CVV: exactly 3 digits
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
      setError("CVV must be 3 digits.");
      return;
    }

    // If all validations pass:
    alert("Order placed! Thank you for your purchase.");
    navigate("/home");
  };

  // Calculate totals
  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 49.99; // Flat shipping rate for example
  const tax = +(subtotal * 0.08).toFixed(2); // 8% tax example
  const total = +(subtotal + shipping + tax).toFixed(2);

  return (
    <div className="checkout-container">
      {/* ── BACK BUTTON ───────────────────────────────────────────────── */}
      <div className="cart-back-wrapper">
        <button className="cart-back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
      <h2 className="checkout-title">Checkout</h2>
      <div className="checkout-content">
        {/* ─── LEFT COLUMN: Billing & Payment Form ──────────────────────── */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          {error && <div className="error-msg">{error}</div>}

          <h3 className="section-heading">Billing & Shipping Details</h3>

          {/* Full Name */}
          <div className="input-group">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="fullName">Full Name</label>
          </div>

          {/* Email */}
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="email">Email Address</label>
          </div>

          {/* Address */}
          <div className="input-group">
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="address">Street Address</label>
          </div>

          <div className="row-group">
            {/* City */}
            <div className="input-group small">
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="city">City</label>
            </div>

            {/* State */}
            <div className="input-group small">
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="state">State</label>
            </div>

            {/* ZIP */}
            <div className="input-group small">
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
                placeholder=" "
                maxLength={5}
              />
              <label htmlFor="zip">ZIP Code</label>
            </div>
          </div>

          <h3 className="section-heading">Payment Details</h3>

          {/* Card Number */}
          <div className="input-group">
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  cardNumber: e.target.value.replace(/\D/g, ""),
                }))
              }
              required
              placeholder=" "
              maxLength={16}
            />
            <label htmlFor="cardNumber">Card Number</label>
          </div>

          <div className="row-group">
            {/* Expiry */}
            <div className="input-group small">
              <input
                type="text"
                id="expiry"
                name="expiry"
                value={formData.expiry}
                onChange={(e) => setFormData((prev) => ({
                  ...prev,
                  expiry: e.target.value,
                }))}
                required
                placeholder=" "
                maxLength={5}
              />
              <label htmlFor="expiry">Expiry Date (MM/YY)</label>
            </div>

            {/* CVV */}
            <div className="input-group small">
              <input
                type="password"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    cvv: e.target.value.replace(/\D/g, ""),
                  }))
                }
                required
                placeholder=" "
                maxLength={3}
              />
              <label htmlFor="cvv">CVV</label>
            </div>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>

        {/* ─── RIGHT COLUMN: Order Summary ──────────────────────────────── */}
        <aside className="order-summary">
          <h3 className="section-heading">Order Summary</h3>
          <div className="summary-items">
            {orderItems.map((item) => (
              <div key={item.id} className="summary-item">
                <div className="summary-item-info">
                  <p className="summary-item-name">{item.name}</p>
                  <p className="summary-item-qty">Qty: {item.quantity}</p>
                </div>
                <p className="summary-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="summary-divider" />

          <div className="summary-totals">
            <div className="summary-line">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-line total-line">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
