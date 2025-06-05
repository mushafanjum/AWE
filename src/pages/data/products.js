// src/pages/data/products.js

// ─── IMPORT IMAGES FROM src/images ──────────────────────────────────
import iphone12Img from "../../images/iphone.png";
import iphone8Img from "../../images/iphone.png";
import oppoImg from "../../images/iphone.png";
import iphone13proImg from "../../images/iphone.png";
import dellXPS13Img from "../../images/iphone.png";
import hpSpectreImg from "../../images/iphone.png";
import lenovoX1Img from "../../images/iphone.png";
import asusROGImg from "../../images/iphone.png";
import pixel6Img from "../../images/iphone.png";
import nokiaX20Img from "../../images/iphone.png";

// ─── THE PRODUCT ARRAY ──────────────────────────────────────────────
const allProductsData = [
  {
    id: "iphone-12",
    name: "Apple iPhone 12 64GB/128GB/256GB (Refurbished)",
    img: iphone12Img,
    price: 385,
    priceFrom: true,
    freeShipping: true,
    priceDrop: true,
    rating: 4.5,
    reviewCount: 16,
    sponsored: false,
  },
  {
    id: "iphone-8",
    name: "Apple iPhone 8 64GB Space Grey - Very Good",
    img: iphone8Img,
    price: 129,
    priceFrom: false,
    freeShipping: true,
    priceDrop: false,
    rating: 4.7,
    reviewCount: 18,
    sponsored: false,
  },
  {
    id: "oppo-findx5",
    name: "OPPO Find X5 Lite 5G (256GB/8GB) - Starry Black",
    img: oppoImg,
    price: 349.99,
    priceFrom: false,
    freeShipping: true,
    priceDrop: false,
    rating: 5.0,
    reviewCount: 1,
    sponsored: false,
  },
  {
    id: "iphone-13-pro",
    name: "iPhone 13 Pro Max (Refurbished)",
    img: iphone13proImg,
    price: 739,
    priceFrom: true,
    freeShipping: true,
    priceDrop: true,
    rating: 0,
    reviewCount: 0,
    sponsored: true,
  },
  // ── More “Laptop” Additions ─────────────────────────────────────────
  {
    id: "laptop-dellxps13",
    name: "Dell XPS 13 (2023) – Core i7, 16GB RAM, 512GB SSD",
    img: dellXPS13Img,
    price: 1299.99,
    priceFrom: false,
    freeShipping: true,
    priceDrop: false,
    rating: 4.8,
    reviewCount: 45,
    sponsored: false,
  },
  {
    id: "laptop-hpspectre",
    name: "HP Spectre x360 – Core i5, 8GB RAM, 256GB SSD",
    img: hpSpectreImg,
    price: 999.99,
    priceFrom: false,
    freeShipping: true,
    priceDrop: false,
    rating: 4.3,
    reviewCount: 28,
    sponsored: false,
  },
  {
    id: "laptop-lenovox1",
    name: "Lenovo ThinkPad X1 Carbon – Core i7, 16GB RAM, 1TB SSD",
    img: lenovoX1Img,
    price: 1599.99,
    priceFrom: false,
    freeShipping: true,
    priceDrop: false,
    rating: 4.6,
    reviewCount: 32,
    sponsored: true,
  },
  {
    id: "laptop-asusrog",
    name: "ASUS ROG Zephyrus G14 – Ryzen 9, 32GB RAM, 1TB SSD",
    img: asusROGImg,
    price: 1899.99,
    priceFrom: false,
    freeShipping: false,
    priceDrop: false,
    rating: 4.9,
    reviewCount: 18,
    sponsored: false,
  },
  // ── Extra Smartphones ───────────────────────────────────────────────
  {
    id: "smartphone-pixel6",
    name: "Google Pixel 6 – 128GB, Stormy Black",
    img: pixel6Img,
    price: 599.99,
    priceFrom: false,
    freeShipping: true,
    priceDrop: true,
    rating: 4.4,
    reviewCount: 62,
    sponsored: false,
  },
  {
    id: "smartphone-nokiax20",
    name: "Nokia X20 – 64GB/128GB (Green)",
    img: nokiaX20Img,
    price: 329.99,
    priceFrom: false,
    freeShipping: true,
    priceDrop: false,
    rating: 4.2,
    reviewCount: 12,
    sponsored: false,
  },
  // …you may add more items here in the same fashion…
];

export default allProductsData;
