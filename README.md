# ESSIMU — Uganda Tech Marketplace

A streamlined tech marketplace connecting Ugandan shoppers to premium smartphones, accessories, TVs and laptops — without the friction of accounts or checkout flows. **Discover, tap, and buy via WhatsApp.**

## Overview

ESSIMU bridges the gap between discovery and purchase. By removing account requirements and integrating direct WhatsApp ordering, it delivers the fastest path from interest to purchase for premium tech products in Uganda.

## Why WhatsApp ordering?

Uganda's e-commerce landscape is mobile-first, and buyers already live in WhatsApp. ESSIMU leans into that: no login walls, no card forms, no abandoned carts — every product routes straight into a seller chat where the deal closes.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router), React Compiler enabled |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Backend | Firebase |
| Media | next-cloudinary |
| Icons | Font Awesome, Lucide |

## Features

- **No-account shopping** — browse and order instantly
- **Shop by category** — smartphones, accessories, TVs, laptops
- **Repairs** — phone and gadget repair services
- **Local basket, no online checkout** — the cart is stored in the browser (`essimu_cart_v1`) and the "Place Order via WhatsApp" button opens a prefilled order message; no card payment or server-side checkout
- **Admin panel** — product management, form-based CRUD, stat cards
- **Home page** — hero, categories, best sellers, brand marquee, testimonials
- **Auth** — optional admin login for store management

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local with the variables listed below

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Environment Variables

- `NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`, `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`, `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`, `NEXT_PUBLIC_FIREBASE_APP_ID` — Firebase client config (`src/lib/firebase.ts`)
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` — Cloudinary upload cloud name (`src/app/admin/components/ProductForm.tsx`)

## Project Structure

```
src/
├── app/
│   ├── shop/           # Smartphones, accessories, TVs, laptops
│   ├── repair/         # Repair services
│   ├── cart/           # Cart
│   ├── admin/          # Product management (ProductForm, ProductTable, StatCard)
│   ├── (auth)/login/   # Admin login
│   ├── faq/            # FAQ
│   ├── privacy/        # Privacy policy
│   └── terms/          # Terms of service
├── components/
│   ├── Home/           # Hero, Category, BestSellers, BrandMarquee, Testimonials, WhatsApp button
│   └── Shop/           # ProductSidebar, ProductCard
└── context/            # Cart, Auth
```

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Lint with ESLint
```

## License

All rights reserved. No license is granted; contact the repository owner for permission.
