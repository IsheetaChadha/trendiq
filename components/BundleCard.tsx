"use client";

import Link from "next/link";
import type { Bundle } from "@/lib/data";
import { useToast } from "@/components/ToastProvider";
import { ProductArt } from "@/components/ProductArt";
import { BundleCover } from "@/components/BundleCover";
import { Package } from "lucide-react";

const tagStyles: Record<string, string> = {
  "High Opportunity": "bg-emerald-50 text-emerald-700",
  "On The Rise": "bg-orange-50 text-orange-700",
};

export function BundleCard({ bundle }: { bundle: Bundle }) {
  const { showToast } = useToast();

  return (
    <div className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span
            className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
              tagStyles[bundle.tag] ?? "bg-zinc-100 text-zinc-600"
            }`}
          >
            {bundle.tag}
          </span>

          <h3 className="mt-3 text-lg font-semibold text-zinc-900">{bundle.title}</h3>
          <p className="text-sm text-zinc-500">{bundle.subtitle}</p>
        </div>

        <BundleCover bundle={bundle} className="h-20 w-20" />
      </div>

      <div className="mt-4">
        <div className="text-2xl font-bold text-emerald-600">{bundle.confidence}%</div>
        <div className="text-xs text-zinc-400">Confidence Score</div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {bundle.products.map((p) => (
          <div
            key={p.id}
            title={`${p.brand} ${p.name}`}
            className="h-9 w-9 overflow-hidden rounded-lg"
          >
            <ProductArt category={p.category} brand={p.brand} shape={p.shape} />
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-zinc-600">{bundle.description}</p>
      <p className="mt-2 text-sm text-zinc-500 italic">{bundle.whyRecommended}</p>

      <div className="mt-4 flex items-center gap-2 text-sm text-zinc-600">
        <Package className="h-4 w-4 text-zinc-700" />
        <span className="font-medium text-zinc-900">{bundle.products.length}</span>
        Products
      </div>

      <div className="mt-5 flex gap-2">
        <Link
          href={`/bundles/${bundle.id}`}
          className="flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-center text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        >
          Preview Bundle
        </Link>
        <button
          type="button"
          onClick={() => showToast(`${bundle.title} added to order`)}
          className="flex-1 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Add to Order
        </button>
      </div>
    </div>
  );
}
