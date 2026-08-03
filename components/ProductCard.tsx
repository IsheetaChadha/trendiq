import type { Product } from "@/lib/data";
import { brandStyles } from "@/lib/data";
import { ProductArt } from "@/components/ProductArt";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 bg-white p-4">
      <div className="h-24 w-full overflow-hidden rounded-lg">
        <ProductArt category={product.category} brand={product.brand} />
      </div>
      <span
        className={`mt-3 w-fit rounded-full px-2 py-0.5 text-[10px] font-medium ${brandStyles[product.brand]}`}
      >
        {product.brand}
      </span>
      <h4 className="mt-1.5 text-sm font-semibold text-zinc-900">{product.name}</h4>
      <p className="text-xs text-zinc-500">{product.variant}</p>
      <p className="mt-1 text-xs text-zinc-400">SKU {product.sku}</p>

      <div className="mt-3 border-t border-zinc-100 pt-3 text-xs">
        <div className="text-zinc-400">Suggested Qty</div>
        <div className="font-medium text-zinc-900">{product.suggestedQty}</div>
      </div>
      <div className="mt-2 text-xs">
        <div className="text-zinc-400">Reason</div>
        <div className="font-medium text-zinc-900">{product.reason}</div>
      </div>
    </div>
  );
}
