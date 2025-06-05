// src/Home.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./home.css";
import bannerIphones from "../images/iphone.png";
import phoneLogo from "../images/phone_logo.png";
import LaptopLogo from "../images/laptop_logo.png";
import headphoneLogo from "../images/headphone_logo.png";
import cameraLogo from "../images/camera_logo.png";
import consoleLogo from "../images/console_logo.png";
import powerbankLogo from "../images/powerbank_logo.png";
import smartwatchLogo from "../images/smartwatch_logo.png";
import speakerLogo from "../images/speaker_logo.jpg";
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
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // ─── Sample data for the sidebar & grid categories ──────────────────
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
    { name: "Smartphones", img: phoneLogo },
    { name: "Laptops", img: LaptopLogo },
    { name: "Headphones", img: headphoneLogo },
    { name: "Cameras", img: cameraLogo },
    { name: "Gaming Consoles", img: consoleLogo },
    { name: "Power Banks", img: powerbankLogo },
    { name: "Smart Watches", img: smartwatchLogo },
    { name: "Speakers", img: speakerLogo },
  ];

  // ─── Sample data for the header’s topNav links (beneath the main header) ──
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

  // ─── Sample data structure for the mega‐menu ─────────────────────────
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

  const topCategories = Object.keys(megaMenuData);

  return (
    <div className="home-container">
      {/* HEADER */}
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
              setHoveredCategory(topCategories[0]);
            }}
          >
            <button className="shop-by-btn">
              <FaBars className="icon-bars" /> Shop By Category
            </button>

            {showDropdown && (
              <div className="mega-dropdown">
                {/* LEFT COLUMN: top‐level categories */}
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

                {/* RIGHT SECTION: subcategories */}
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
                    alert("Signing out...");
                    setShowAccountDropdown(false);
                    navigate("/login");
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

      {/* TOP NAV LINKS */}
      <nav className="top-nav">
        <ul>
          {topMenu.map((link, idx) => (
            <li key={idx}>{link}</li>
          ))}
        </ul>
      </nav>

      {/* MAIN CONTENT (Sidebar + Banner + Grid) */}
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

        {/* Right side: Banner + “Shop by Category” Grid */}
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
                <div
                  key={idx}
                  className="grid-card"
                  onClick={() =>
                    navigate(
                      `/all-products?category=${encodeURIComponent(cat.name)}`
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img src={cat.img} alt={cat.name} className="grid-img" />
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
