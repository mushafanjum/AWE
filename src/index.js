import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from "./context/cartContent";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// // src/index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { CartProvider } from "./context/cartContent";

// ReactDOM.render(
//   <React.StrictMode>
//     <CartProvider>
//       <App />
//     </CartProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
