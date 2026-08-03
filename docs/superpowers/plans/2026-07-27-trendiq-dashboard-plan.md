# TrendIQ Retailer Dashboard Implementation Plan

**Goal:** Build a 2-page Next.js prototype (Dashboard + Bundle Detail) matching
`docs/superpowers/specs/2026-07-27-trendiq-dashboard-design.md`, with mock data
and no backend.

**Architecture:** Next.js App Router + TypeScript + Tailwind CSS. All content
driven by a static mock-data module. A single client-side `ToastProvider`
handles the "Add to Order" / "Generate AI Assortments" confirmation toasts.

**Tech Stack:** Next.js (latest), TypeScript, Tailwind CSS, lucide-react for icons.

**Note on process:** This is a visual prototype with no meaningful unit-testable
logic (no calculations, parsing, or business rules — just data → JSX). Full
TDD/bite-sized-step choreography would add overhead without value, so tasks
below are structured as file-level build steps with manual verification
(dev server + browser check) instead of unit tests.

## File Structure

- `app/layout.tsx` — root layout, wraps children in `Sidebar` + `ToastProvider`
- `app/page.tsx` — Dashboard page
- `app/bundles/[id]/page.tsx` — Bundle detail page
- `components/Sidebar.tsx` — left nav (logo, Dashboard link, Help Center, profile block)
- `components/Topbar.tsx` — store switcher + bell icon
- `components/StatPill.tsx` — single trend stat pill
- `components/BundleCard.tsx` — dashboard bundle card
- `components/ProductCard.tsx` — product grid item (used on detail page)
- `components/ToastProvider.tsx` — client component: context + toast UI
- `lib/data.ts` — mock bundles/products/trend-stats data + TS types

## Tasks

### Task 1: Scaffold project
- [ ] Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*" --yes` in the project root
- [ ] Verify `npm run dev` starts and default page loads
- [ ] Commit: skip (no git repo yet — init git as part of this task if user wants version control)

### Task 2: Mock data layer
- [ ] Create `lib/data.ts` exporting:
  - `type Product = { id: string; name: string; variant: string; sku: string; suggestedQty: string; reason: string; category: string }`
  - `type Bundle = { id: string; title: string; tag: string; subtitle: string; confidence: number; revenueIncrease: string; productCount: number; avgMargin: string; trendDuration: string; demandStrength: number; storesUsing: number; sellThrough: number; whyBullets: string[]; frequentlyBoughtWith: string[]; seasonality: string; consumerInterest: string; products: Product[] }`
  - `trendStats: { icon, label, value, sublabel }[]` (5 entries)
  - `bundles: Bundle[]` (3 entries: Fuel Your Basket, Winning Game Day, Lunchbox Essentials), each with 6-10 products across 2-3 categories
- [ ] Verify by importing in a scratch file / `console.log` via `node --experimental-strip-types` or just visually reviewing — no runtime yet to test against

### Task 3: Toast provider
- [ ] Create `components/ToastProvider.tsx` as a client component (`"use client"`) exporting `ToastProvider` (wraps children, holds toast state) and `useToast()` hook returning `showToast(message: string)`
- [ ] Toast renders as a fixed-position bottom-right banner, auto-dismisses after 3s
- [ ] Verify: temporarily call `useToast().showToast("test")` from a button in `app/page.tsx` once Task 4 scaffolding exists

### Task 4: Sidebar + Topbar + root layout
- [ ] Create `components/Sidebar.tsx`: logo/name header, single "Dashboard" nav item (active styling, links to `/`), spacer, "Help Center" link (decorative), profile block (avatar placeholder, "Sarah Johnson", "GreenMart Stores")
- [ ] Create `components/Topbar.tsx`: store switcher display ("GreenMart Store #104" + chevron, decorative) and bell icon
- [ ] Update `app/layout.tsx`: flex layout with `Sidebar` fixed-width left column, main column wraps `ToastProvider` + `{children}`
- [ ] Verify: `npm run dev`, confirm sidebar/layout renders with no console errors

### Task 5: Dashboard page
- [ ] Create `components/StatPill.tsx`: icon + label + value/sublabel, small card styling
- [ ] Create `components/BundleCard.tsx`: props from `Bundle`, renders tag, title, subtitle, confidence %, stat rows (revenue/products/margin), product-image collage (use colored placeholder swatches or emoji/icon grid since no real product images), "Preview Bundle" (Next `Link` to `/bundles/[id]`) and "Add to Order" (`onClick` → `useToast().showToast(...)`) buttons
- [ ] Build `app/page.tsx`: greeting header, `trendStats.map(StatPill)` row, "Generate AI Assortments" CTA banner (button calls `showToast`), "Recommended for Your Store" header + `bundles.map(BundleCard)` grid
- [ ] Verify: dashboard visually matches reference screenshot layout at desktop width; clicking "Add to Order" shows toast; clicking "Preview Bundle" navigates

### Task 6: Bundle detail page
- [ ] Create `components/ProductCard.tsx`: image placeholder, name, variant, SKU, suggested qty, reason
- [ ] Build `app/bundles/[id]/page.tsx`:
  - Look up bundle by `id` from `lib/data.ts` (call `notFound()` if missing)
  - Back link to `/`
  - Header row: title, tags, confidence score, Share (decorative) + Add to Order (`showToast`) buttons
  - Tab state (`useState<'overview' | 'products' | 'why'>`) with 3 tab buttons
  - Overview tab: two-column boxes (Overview stats; Why This Assortment bullets/tags/bar)
  - Products tab: category filter chips (derived from `bundle.products`) + responsive grid of `ProductCard`
- [ ] Verify: navigate from each of the 3 dashboard cards, confirm correct bundle data shows, tab switching works, category chip filtering works, Add to Order shows toast

### Task 7: Polish pass
- [ ] Check responsive behavior at ~1280px and ~768px widths (sidebar can collapse or just accept desktop-first if time-constrained — note limitation to user rather than silently skipping)
- [ ] Confirm no unused nav links/dead hrefs remain in Sidebar
- [ ] Run `npm run build` to confirm no type/lint errors
- [ ] Start dev server and do a full click-through: dashboard → each bundle detail → back → toasts

## Global Constraints

- No backend/API calls, no auth, no real ordering — everything is static mock data (per spec).
- Only two routes exist: `/` and `/bundles/[id]` (per spec's Scope section).
- Sidebar shows only Dashboard as a functional link — all other nav items removed entirely (per spec).
