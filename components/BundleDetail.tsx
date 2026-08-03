"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Share2 } from "lucide-react";
import type { Bundle } from "@/lib/data";
import { useToast } from "@/components/ToastProvider";
import { ProductCard } from "@/components/ProductCard";
import { BundleCover } from "@/components/BundleCover";

type Tab = "overview" | "products" | "why";

export function BundleDetail({ bundle }: { bundle: Bundle }) {
  const { showToast } = useToast();
  const [tab, setTab] = useState<Tab>("overview");
  const [category, setCategory] = useState<string>("All Categories");

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of bundle.products) {
      counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    }
    return Array.from(counts.entries());
  }, [bundle.products]);

  const visibleProducts =
    category === "All Categories"
      ? bundle.products
      : bundle.products.filter((p) => p.category === category);

  return (
    <main className="flex-1 px-4 py-6 sm:px-8 sm:py-8">
      <Link
        href="/"
        className="flex w-fit items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Recommendations
      </Link>

      <BundleCover bundle={bundle} className="mt-4 h-36 max-w-56 sm:h-44 sm:max-w-72" />

      <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-zinc-900 sm:text-2xl">{bundle.title}</h1>
          <p className="mt-1 text-sm text-zinc-500">{bundle.subtitle}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-emerald-600">{bundle.confidence}%</div>
          <div className="text-xs text-zinc-400">Confidence Score</div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => showToast("Link copied (demo)")}
          className="flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        >
          <Share2 className="h-4 w-4" />
          Share
        </button>
        <button
          type="button"
          onClick={() => showToast(`${bundle.title} added to order`)}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Add to Order
        </button>
      </div>

      <div className="mt-6 flex gap-4 overflow-x-auto border-b border-zinc-200 sm:gap-6">
        {(
          [
            ["overview", "Overview"],
            ["products", `Products (${bundle.products.length})`],
            ["why", "Why This Assortment?"],
          ] as [Tab, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={`shrink-0 whitespace-nowrap border-b-2 pb-3 text-sm font-medium ${
              tab === key
                ? "border-red-600 text-red-600"
                : "border-transparent text-zinc-500 hover:text-zinc-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="font-semibold text-zinc-900">Overview</h3>
            <p className="mt-2 text-sm text-zinc-600">{bundle.description}</p>
            <p className="mt-2 text-sm text-zinc-500 italic">{bundle.whyRecommended}</p>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-xs text-zinc-400">Peak Season</div>
                <div className="font-medium text-zinc-900">{bundle.seasonality}</div>
              </div>
              <div>
                <div className="text-xs text-zinc-400">Demand Strength</div>
                <div className="font-medium text-zinc-900">{bundle.demandStrength}%</div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-zinc-100">
                  <div
                    className="h-1.5 rounded-full bg-red-600"
                    style={{ width: `${bundle.demandStrength}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="text-xs text-zinc-400">Stores Stocking This</div>
                <div className="font-medium text-zinc-900">{bundle.storesUsing.toLocaleString()}+</div>
              </div>
              <div>
                <div className="text-xs text-zinc-400">Typically Sells Out In</div>
                <div className="font-medium text-zinc-900">{bundle.sellsOutIn}</div>
              </div>
            </div>
          </div>

          <WhyAssortmentCard bundle={bundle} />
        </div>
      )}

      {tab === "why" && (
        <div className="mt-6 max-w-2xl">
          <WhyAssortmentCard bundle={bundle} />
        </div>
      )}

      {tab === "products" && (
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory("All Categories")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                category === "All Categories"
                  ? "bg-red-600 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              All Categories
            </button>
            {categories.map(([name, count]) => (
              <button
                key={name}
                type="button"
                onClick={() => setCategory(name)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                  category === name
                    ? "bg-red-600 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {name} ({count})
              </button>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

function WhyAssortmentCard({ bundle }: { bundle: Bundle }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <h3 className="font-semibold text-zinc-900">Why this assortment?</h3>
      <ul className="mt-3 space-y-2 text-sm text-zinc-600">
        {bundle.whyBullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="text-emerald-500">•</span>
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {bundle.frequentlyBoughtWith.map((item) => (
          <span
            key={item}
            className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>Confidence</span>
          <span>{bundle.confidence}%</span>
        </div>
        <div className="mt-1 h-1.5 w-full rounded-full bg-zinc-100">
          <div
            className="h-1.5 rounded-full bg-emerald-500"
            style={{ width: `${bundle.confidence}%` }}
          />
        </div>
      </div>
    </div>
  );
}
