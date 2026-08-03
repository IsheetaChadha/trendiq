# TrendIQ Retailer Dashboard — Design Spec

## Purpose

A clickable prototype demonstrating the retailer-facing experience for TrendIQ: an
AI-curated wholesale assortment tool. A retailer opens the dashboard, sees
trend-based product bundles recommended for their store, and can drill into a
bundle to review its included products before adding it to their order. No
backend, auth, or real ordering — this is a front-end demo for pitching the
concept.

## Tech Stack

- Next.js (App Router), TypeScript
- Tailwind CSS for styling
- Static/mock data in a local TS module — no database, no API calls
- Deployable to Vercel as a static-ish app

## Scope

Two pages only:

1. **Dashboard** (`/`)
2. **Bundle Detail** (`/bundles/[id]`)

No My Orders, Trend Explorer, AI Recommendations, Inventory Insights, or
Account pages. No auth/login flow.

## Layout

**Sidebar** (persistent, left): TrendIQ logo/name at top, single nav item
"Dashboard" (active state), "Help Center" and a store-profile block (avatar,
name "Sarah Johnson", "GreenMart Stores") pinned to the bottom. No other nav
items — nothing else in the sidebar is functional or shown.

**Top bar**: store switcher control (display only, e.g. "GreenMart Store
#104") and a notification bell icon (display only).

## Page 1: Dashboard (`/`)

- Greeting header: "Good morning, Sarah! 👋" + subtext about EagleEye trend
  insights.
- Row of 5 trend opportunity stat pills (icon, label, % change vs last 30
  days, or a countdown like "Starts in 3 weeks"): High Protein Foods,
  Halloween Prep, Game Day, Movie Night, Wellness & Clean Eating. Static
  mock values.
- "Generate AI Assortments" CTA banner (button + helper text). Button is
  decorative for the prototype (no real generation) — clicking may show a
  toast noting it's a demo.
- "Recommended for Your Store" section header with a "See all" link
  (decorative).
- 3 bundle cards in a row, each with: opportunity tag (e.g. "High
  Opportunity"), title, subtitle/category tags, confidence score (large %),
  stats (est. revenue increase, product count, avg margin), a product-image
  collage, and two buttons: "Preview Bundle" (navigates to bundle detail) and
  "Add to Order" (shows a confirmation toast, no navigation).

Bundles (mock data, matching the reference screenshot):
1. **Fuel Your Basket** — High Protein · Health Trend — 94% confidence
2. **Winning Game Day** — Snacks · Beverages · Essentials — 91% confidence
3. **Lunchbox Essentials** — Back to School · Kids — 88% confidence

## Page 2: Bundle Detail (`/bundles/[id]`)

- "← Back to Recommendations" link back to `/`.
- Header: bundle title, category tags, confidence score (top right), "Add to
  Order" button (toast confirmation) and a "Share" button (decorative).
- Tabs: **Overview** (default), **Products (N)**, **Why This Assortment?**.
  Overview tab shows two boxes side by side:
  - Overview box: description text, trend duration, demand strength (bar),
    stores using this, avg sell-through.
  - "Why this assortment?" box: bullet list (e.g. "31% increase in category
    purchases", frequently-bought-together tag pills, seasonality note,
    consumer interest note, confidence bar).
- Products tab (or scroll section below, kept simple): category filter chips
  (All Categories + per-category counts) and a responsive grid of product
  cards (image, name, variant, SKU, suggested qty, reason).

Each bundle has 6–10 mock products (not all 42 from the reference — enough
to demonstrate the layout) spread across 2–3 categories with per-category
chip counts.

## Interactions

- "Preview Bundle" / clicking a bundle card → navigates to
  `/bundles/[id]`.
- "Add to Order" (dashboard or detail page) → shows a toast/confirmation
  message; no real order is created.
- "Generate AI Assortments" → toast noting this is a prototype action.
- Tabs on detail page switch visible content client-side.

## Out of Scope

- Authentication, real data persistence, real ordering/checkout,
  search/filtering beyond the category chips, any page besides the two
  listed above.
