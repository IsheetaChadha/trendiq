"use client";

import { useEffect, useRef, useState } from "react";
import { ImageOff } from "lucide-react";
import type { Bundle } from "@/lib/data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function BundleCover({
  bundle,
  className = "h-20 w-20",
}: {
  bundle: Bundle;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setErrored(true);
    }
  }, []);

  if (errored) {
    return (
      <div
        className={`flex shrink-0 flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 p-2 text-zinc-400 ${className}`}
      >
        <ImageOff className="h-5 w-5" />
        <span className="text-center text-[9px] leading-tight">
          Add {bundle.coverImage}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={`${basePath}${bundle.coverImage}`}
      alt={`${bundle.title} cover`}
      onError={() => setErrored(true)}
      className={`shrink-0 rounded-xl border border-zinc-200 bg-zinc-50 object-cover ${className}`}
    />
  );
}
