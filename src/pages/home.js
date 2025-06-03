// // src/Home.js
// import React from "react";
// import "./home.css";
// import bannerIphones from "../images/iphone.png";
// import {
//   FaUser,
//   FaHeart,
//   FaShoppingCart,
//   FaBars,
//   FaSearch,
// } from "react-icons/fa";

// export default function Home() {
//   // Sample data for categories (sidebar & grid)
//   const sideCategories = [
//     "Phones",
//     "Mobile Phone Accessories",
//     "Tablets & iPads",
//     "Audio & Sound",
//     "Computers",
//     "Security",
//     "Photography & Videography",
//     "TVs & Projectors",
//     "Gaming",
//     "Network & Storage",
//     "Printers & Scanners",
//     "Batteries & Power Supplies",
//     "Gadgets",
//     "Cables & Adapters",
//     "GPS & Navigation",
//   ];

//   const gridCategories = [
//     { name: "Smartphones", img: "/images/cat-smartphone.jpg" },
//     { name: "Laptops", img: "/images/cat-laptop.jpg" },
//     { name: "Headphones", img: "/images/cat-headphones.jpg" },
//     { name: "Cameras", img: "/images/cat-camera.jpg" },
//     { name: "Gaming Consoles", img: "/images/cat-gaming.jpg" },
//     { name: "Power Banks", img: "/images/cat-powerbank.jpg" },
//     { name: "Smart Watches", img: "/images/cat-smartwatch.jpg" },
//     { name: "Speakers", img: "/images/cat-speaker.jpg" },
//   ];

//   // Sample top menu (just text links)
//   const topMenu = [
//     "Gaming Simulators",
//     "Styluses",
//     "Household Batteries",
//     "Power Banks",
//     "Android Tablets",
//     "Surveillance Systems",
//     "Power & Charging Cables",
//     "Speakers",
//   ];

//   return (
//     <div className="home-container">
//       {/* ─────────────────────────────────────────────────────────────────── */}
//       {/* HEADER: Logo / Shop By Category / Search Bar / Icons (User, Heart, Cart) */}
//       {/* ─────────────────────────────────────────────────────────────────── */}
//       <header className="header">
//         <div className="header-left">
//           <h1 className="logo">AWE Electronics</h1>
//         </div>
//         <div className="header-center">
//           <button className="shop-by-btn">
//             <FaBars /> Shop By Category
//           </button>
//         </div>
//         <div className="header-middle">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search millions of deals..."
//           />
//           <button className="search-btn">
//             <FaSearch />
//           </button>
//         </div>
//         <div className="header-right">
//           <FaUser className="icon" title="Account" />
//           <FaHeart className="icon" title="Wishlist" />
//           <FaShoppingCart className="icon" title="Cart" />
//         </div>
//       </header>

//       {/* ─────────────────────────────────────────────────────────────────── */}
//       {/* TOP NAV (under header) */}
//       {/* ─────────────────────────────────────────────────────────────────── */}
//       <nav className="top-nav">
//         <ul>
//           {topMenu.map((item, idx) => (
//             <li key={idx}>{item}</li>
//           ))}
//         </ul>
//       </nav>

//       {/* ─────────────────────────────────────────────────────────────────── */}
//       {/* MAIN CONTENT: Sidebar (Categories) + Right (Banner + Grid) */}
//       {/* ─────────────────────────────────────────────────────────────────── */}
//       <main className="main-content">
//         {/* Sidebar */}
//         <aside className="sidebar">
//           <h2 className="sidebar-title">Categories</h2>
//           <ul>
//             {sideCategories.map((cat, idx) => (
//               <li key={idx}>{cat}</li>
//             ))}
//           </ul>
//         </aside>

//         {/* Right side: Banner + Categories Grid */}
//         <section className="right-section">
//           {/* Banner */}
//           <div className="banner-container">
//             <img
//               src={bannerIphones}
//               alt="iPhones Banner"
//               className="banner-img"
//             />
//             {/* <img
//               src="../../public/images/iphone_banner.png"
//               alt="iPhones Banner"
//               className="banner-img"
//             /> */}
//             <div className="banner-text">iPhones</div>
//           </div>

//           {/* “Shop by Category” Grid */}
//           <div className="grid-section">
//             <h2>Shop by Category</h2>
//             <div className="grid-container">
//               {gridCategories.map((cat, idx) => (
//                 <div className="grid-card" key={idx}>
//                   <img
//                     src={cat.img}
//                     alt={cat.name}
//                     className="grid-img"
//                     onError={(e) => {
//                       // Fallback if image not found
//                       e.target.src =
//                         "https://via.placeholder.com/150?text=No+Image";
//                     }}
//                   />
//                   <div className="grid-label">{cat.name}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }















// src/Home.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./home.css";
import bannerIphones from "../images/iphone.png"; // adjust path if necessary
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaSearch,
  FaChevronRight,
  FaSignOutAlt,
  FaBoxOpen,
} from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  // ─── State for the account dropdown ─────────────────────────────────
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  // ─────────────────────────────────────────────────────────────────────
  // Sample data for the sidebar & grid categories
  // ─────────────────────────────────────────────────────────────────────
  const sideCategories = [
    "Phones",
    "Mobile Phone Accessories",
    "Tablets & iPads",
    "Audio & Sound",
    "Computers",
    "Security",
    "Photography & Videography",
    "TVs & Projectors",
    "Gaming",
    "Network & Storage",
    "Printers & Scanners",
    "Batteries & Power Supplies",
    "Gadgets",
    "Cables & Adapters",
    "GPS & Navigation",
  ];

  const gridCategories = [
    { name: "Smartphones", img: "/images/cat-smartphone.jpg" },
    { name: "Laptops", img: "/images/cat-laptop.jpg" },
    { name: "Headphones", img: "/images/cat-headphones.jpg" },
    { name: "Cameras", img: "/images/cat-camera.jpg" },
    { name: "Gaming Consoles", img: "/images/cat-gaming.jpg" },
    { name: "Power Banks", img: "/images/cat-powerbank.jpg" },
    { name: "Smart Watches", img: "/images/cat-smartwatch.jpg" },
    { name: "Speakers", img: "/images/cat-speaker.jpg" },
  ];

  // ─────────────────────────────────────────────────────────────────────
  // Sample data for the header’s topNav links (beneath the main header)
  // ─────────────────────────────────────────────────────────────────────
  const topMenu = [
    "Gaming Simulators",
    "Styluses",
    "Household Batteries",
    "Power Banks",
    "Android Tablets",
    "Surveillance Systems",
    "Power & Charging Cables",
    "Speakers",
  ];

  // ─────────────────────────────────────────────────────────────────────
  // Sample data structure for the mega‐menu:
  // ─────────────────────────────────────────────────────────────────────
  const megaMenuData = {
    Electronics: {
      heading: "Electronics",
      subgroups: [
        {
          title: "Phones",
          items: [
            "iPhone",
            "Samsung Galaxy",
            "Google Pixel",
            "OnePlus",
            "View All",
          ],
        },
        {
          title: "Mobile Accessories",
          items: [
            "Cases & Covers",
            "Chargers & Cables",
            "Screen Protectors",
            "Power Banks",
            "View All",
          ],
        },
        {
          title: "Audio & Sound",
          items: ["Headphones", "Earbuds", "Speakers", "Soundbars", "View All"],
        },
        {
          title: "Computers",
          items: ["Laptops", "Desktops", "Monitors", "Keyboards", "View All"],
        },
      ],
    },
    Fashion: {
      heading: "Fashion",
      subgroups: [
        {
          title: "Men's Fashion",
          items: ["T-Shirts", "Jeans", "Jackets", "Footwear", "View All"],
        },
        {
          title: "Women's Fashion",
          items: ["Dresses", "Tops", "Jeans", "Heels", "View All"],
        },
        {
          title: "Accessories",
          items: ["Bags", "Watches", "Belts", "Jewelry", "View All"],
        },
      ],
    },
    HomeGardens: {
      heading: "Home & Garden",
      subgroups: [
        {
          title: "Bedroom Furniture",
          items: [
            "Bed Frames",
            "Dressers",
            "Nightstands",
            "Mattresses",
            "View All",
          ],
        },
        {
          title: "Dining Furniture",
          items: [
            "Dining Sets",
            "Dining Tables",
            "Dining Chairs",
            "Bar Stools",
            "View All",
          ],
        },
        {
          title: "Living Room Furniture",
          items: [
            "Sofas",
            "Coffee Tables",
            "Armchairs",
            "TV Units",
            "View All",
          ],
        },
        {
          title: "Outdoor Furniture",
          items: [
            "Outdoor Dining Sets",
            "Outdoor Lounge Chairs",
            "Patio Umbrellas",
            "Garden Benches",
            "View All",
          ],
        },
      ],
    },
    SportsOutdoors: {
      heading: "Sports & Outdoors",
      subgroups: [
        {
          title: "Fitness Equipment",
          items: [
            "Treadmills",
            "Dumbbells",
            "Yoga Mats",
            "Stationary Bikes",
            "View All",
          ],
        },
        {
          title: "Outdoor Gear",
          items: [
            "Tents",
            "Sleeping Bags",
            "Backpacks",
            "Hiking Boots",
            "View All",
          ],
        },
        {
          title: "Team Sports",
          items: ["Football", "Basketball", "Soccer", "Baseball", "View All"],
        },
      ],
    },
  };

  // Extract top‐level category keys for the mega‐menu left column
  const topCategories = Object.keys(megaMenuData);

  // ─────────────────────────────────────────────────────────────────────
  // Local state to track which top‐level category is hovered (or clicked)
  // ─────────────────────────────────────────────────────────────────────
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="home-container">
      {/* ─────────────────────────────────────────────────────────────────
         HEADER
         ───────────────────────────────────────────────────────────────── */}
      <header className="header">
        {/* LEFT: Logo */}
        <div className="header-left">
          <h1 className="logo">AWE Electronics</h1>
        </div>

        {/* SHOP BY CATEGORY (center-left) */}
        <div
          className="header-center"
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div
            className="shop-by-container"
            onMouseEnter={() => {
              setShowDropdown(true);
              setHoveredCategory(topCategories[0]); // default to first
            }}
          >
            <button className="shop-by-btn">
              <FaBars className="icon-bars" /> Shop By Category
            </button>

            {showDropdown && (
              <div className="mega-dropdown">
                {/* LEFT COLUMN: list of top‐level categories */}
                <div className="mega-left">
                  <ul>
                    {topCategories.map((catKey) => (
                      <li
                        key={catKey}
                        className={
                          hoveredCategory === catKey ? "active-category" : ""
                        }
                        onMouseEnter={() => setHoveredCategory(catKey)}
                      >
                        {megaMenuData[catKey].heading}
                        <FaChevronRight className="chevron" />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT SECTION: subcategories for the hovered top‐level category */}
                {hoveredCategory && (
                  <div className="mega-right">
                    {megaMenuData[hoveredCategory].subgroups.map(
                      (group, idx) => (
                        <div className="mega-group" key={idx}>
                          <h4 className="mega-group-title">{group.title}</h4>
                          <ul>
                            {group.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* SEARCH BAR (center) */}
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

        {/* ICONS (right) */}
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
                    // Add your sign-out logic here
                    alert("Signing out...");
                    setShowAccountDropdown(false);
                    // navigate("/login");
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
         TOP NAV LINKS (beneath header)
         ───────────────────────────────────────────────────────────────── */}
      <nav className="top-nav">
        <ul>
          {topMenu.map((link, idx) => (
            <li key={idx}>{link}</li>
          ))}
        </ul>
      </nav>

      {/* ─────────────────────────────────────────────────────────────────
         MAIN CONTENT (Sidebar + Banner + Grid)
         ───────────────────────────────────────────────────────────────── */}
      <main className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-title">Categories</h2>
          <ul>
            {sideCategories.map((cat, idx) => (
              <li key={idx}>{cat}</li>
            ))}
          </ul>
        </aside>

        {/* Right side: Banner + Categories Grid */}
        <section className="right-section">
          {/* Banner */}
          <div className="banner-container">
            <img
              src={bannerIphones}
              alt="iPhones Banner"
              className="banner-img"
            />
            <div className="banner-text">iPhones</div>
          </div>

          {/* “Shop by Category” Grid */}
          <div className="grid-section">
            <h2>Shop by Category</h2>
            <div className="grid-container">
              {gridCategories.map((cat, idx) => (
                <div className="grid-card" key={idx}>
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="grid-img"
                    onError={(e) => {
                      // Fallback if image not found
                      e.target.src =
                        "https://via.placeholder.com/150?text=No+Image";
                    }}
                  />
                  <div className="grid-label">{cat.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
