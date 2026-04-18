# 🛒 Kshopify — E-Commerce Website

A fully functional front-end e-commerce web application built with pure **HTML, CSS, and JavaScript**. Kshopify lets users browse products across multiple categories, manage a cart, and complete a checkout — all without any backend or framework.

---

## 🌐 Live Preview

> Open `index.html` in your browser or use **Live Server** in VS Code.

---

## 📁 Folder Structure

```
Kshopify/
│
├── index.html               # Home page
├── about.html               # About Us page
├── all.html                 # All categories overview
├── categories.html          # Product categories page
├── contact.html             # Contact form page
├── service.html             # Customer Service page
├── signin.html              # Sign In page
├── signup.html              # Sign Up / Register page
├── cart.html                # Shopping Cart page
├── checkout.html            # Checkout page
│
├── headphones.html          # Headphones product page
├── smartphones.html         # Smartphones product page
├── smartwatches.html        # Smart Watches product page
├── shoes.html               # Shoes product page
├── clothes.html             # Clothes product page
├── ps5.html                 # PS5 / Gaming product page
│
├── css/
│   └── styles1.css          # Global stylesheet (shared across all pages)
│
├── js/
│   ├── auth.js              # Login / logout logic (localStorage)
│   ├── cart.js              # Cart add, remove, preview, count
│   └── search.js            # Search bar + suggestions logic
│
└── images/
    ├── amazonlogo.jpg        # Navbar logo
    ├── hero1.jpg             # Hero slider image 1
    ├── hero2.jpg             # Hero slider image 2
    ├── hero3.jpg             # Hero slider image 3
    ├── all.jpg               # Background for About / All pages
    ├── categories.jpg        # Background for Categories page
    ├── contact.jpg           # Background for Contact page
    ├── service.jpg           # Background for Service page
    ├── box2_image.jpg        # Home box — Headphones
    ├── box3_image.jpg        # Home box — Smartphones
    ├── box4_image.jpg        # Home box — Smart Watches
    ├── box6_image.jpg        # Home box — Shoes
    ├── box7_image.jpg        # Home box — Clothes
    ├── box8_image.jpg        # Home box — PS5
    ├── boat.jpg              # Boat Rockerz 450
    ├── jbl.jpg               # JBL Tune 510BT
    ├── apple.jpg             # Apple AirPods Max
    ├── iphone.jpg            # iPhone 15
    ├── samsung.jpg           # Samsung Galaxy S23
    ├── oneplus.jpg           # OnePlus 11
    ├── applewatch.jpg        # Apple Watch Series 9
    ├── samsungwatch.jpg      # Samsung Galaxy Watch
    ├── boatwatch.jpg         # Boat Xtend Smart Watch
    ├── nike.jpg              # Nike Air Max
    ├── adidas.jpg            # Adidas Ultraboost
    ├── puma.jpg              # Puma Runner
    ├── shirt.jpg             # Formal Shirt
    ├── tshirt.jpg            # Casual T-Shirt
    ├── jacket.jpg            # Winter Jacket
    ├── ps5.jpg               # PS5 Standard Edition
    ├── ps5digital.jpg        # PS5 Digital Edition
    └── ps5bundle.jpg         # PS5 Gaming Bundle
```

---

## ✨ Features

- 🏠 **Home Page** — Hero image slider with auto-play + category quick links
- 🔍 **Search** — Live suggestions + keyword-based navigation to product pages
- 🛍️ **Product Pages** — Headphones, Smartphones, Smart Watches, Shoes, Clothes, PS5
- 🛒 **Cart System** — Add to cart, increase/decrease quantity, remove items, cart preview on hover
- 💳 **Checkout** — Delivery details form with basic validation and order confirmation
- 🔐 **Auth System** — Sign up & sign in using `localStorage` (no backend needed)
- 📱 **Responsive Design** — Mobile-friendly layout across all pages
- 💬 **Contact Form** — Validates input and opens Gmail with pre-filled message

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling, glassmorphism cards, animations |
| JavaScript (Vanilla) | Cart logic, auth, search, slider |
| localStorage | Persists cart, user session |
| Font Awesome 7 | Icons throughout the site |
| Bootstrap 5 | Used on Contact and Home pages |

---

## 🚀 Getting Started

### Option 1 — Open directly
```bash
# Just double-click index.html in your file explorer
```

### Option 2 — VS Code Live Server (recommended)
```bash
# 1. Open the project folder in VS Code
# 2. Install the "Live Server" extension
# 3. Right-click index.html → "Open with Live Server"
```

### Option 3 — Clone from GitHub
```bash
git clone https://github.com/your-username/kshopify.git
cd kshopify
# Open index.html in browser
```

---

## ⚠️ Important Notes

- All user data (login, cart) is stored in **browser localStorage** — clearing browser data will reset it.
- Images must be placed inside the `images/` folder exactly as named above.
- The CSS file is inside `css/` folder, so image paths in `styles1.css` use `../images/` prefix.
- `service.html` must be **lowercase** — all nav links point to `service.html` not `Service.html`.

---

## 📄 License

This project is open source and free to use for educational purposes.

---

> Built with ❤️ by Keshav — Kshopify Capstone Project
