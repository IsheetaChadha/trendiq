import type { Brand, PackageShape } from "@/lib/data";

type Shape = PackageShape;

const shapeForCategory: Record<string, Shape> = {
  "Protein Bars": "bar",
  Crackers: "box",
  "Fruit Snacks": "pouch",
  Drinks: "bottle",
  Beverages: "can",
  Juice: "juicebox",
  Jerky: "pouch",
  Snacks: "bag",
  Essentials: "jar",
  Dairy: "tub",
  Meat: "pouch",
  Nuts: "pouch",
  Soda: "bottle",
  Appetizers: "box",
  Rice: "bag",
  "Canned Goods": "can",
  Frozen: "bag",
  Baking: "box",
};

type Palette = { primary: string; light: string; dark: string };

const brandColors: Record<Brand, Palette> = {
  "Bowl & Basket": { primary: "#0284c7", light: "#e0f2fe", dark: "#075985" },
  Paperbird: { primary: "#d97706", light: "#fef3c7", dark: "#92400e" },
  "Wholesome Pantry": { primary: "#059669", light: "#d1fae5", dark: "#065f46" },
};

export function ProductArt({
  category,
  brand,
  shape: shapeOverride,
}: {
  category: string;
  brand: Brand;
  shape?: PackageShape;
}) {
  const shape = shapeOverride ?? shapeForCategory[category] ?? "box";
  const colors = brandColors[brand];

  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      <rect x="0" y="0" width="120" height="120" rx="12" fill={colors.light} />
      {renderShape(shape, colors)}
    </svg>
  );
}

function renderShape(shape: Shape, colors: Palette) {
  switch (shape) {
    case "bar":
      return (
        <g>
          <rect x="18" y="42" width="84" height="36" rx="8" fill={colors.primary} />
          <polygon points="18,48 8,42 8,54 18,60" fill={colors.dark} />
          <polygon points="102,48 112,42 112,54 102,60" fill={colors.dark} />
          <rect x="32" y="54" width="56" height="12" rx="3" fill="white" opacity="0.85" />
        </g>
      );
    case "box":
      return (
        <g>
          <rect x="28" y="24" width="64" height="76" rx="6" fill={colors.primary} />
          <polygon points="28,24 92,24 84,12 36,12" fill={colors.dark} />
          <rect x="38" y="52" width="44" height="20" rx="3" fill="white" opacity="0.85" />
        </g>
      );
    case "pouch":
      return (
        <g>
          <path
            d="M40 20 L80 20 L92 40 L92 96 Q92 104 84 104 L36 104 Q28 104 28 96 L28 40 Z"
            fill={colors.primary}
          />
          <path d="M40 20 L80 20 L84 28 L36 28 Z" fill={colors.dark} />
          <ellipse cx="60" cy="66" rx="22" ry="16" fill="white" opacity="0.85" />
        </g>
      );
    case "bottle":
      return (
        <g>
          <rect x="50" y="10" width="20" height="16" rx="3" fill={colors.dark} />
          <path
            d="M46 26 L74 26 L80 44 L80 100 Q80 108 72 108 L48 108 Q40 108 40 100 L40 44 Z"
            fill={colors.primary}
          />
          <rect x="42" y="58" width="36" height="22" rx="4" fill="white" opacity="0.85" />
        </g>
      );
    case "can":
      return (
        <g>
          <rect x="34" y="18" width="52" height="84" rx="10" fill={colors.primary} />
          <ellipse cx="60" cy="18" rx="26" ry="8" fill={colors.dark} />
          <ellipse cx="60" cy="102" rx="26" ry="8" fill={colors.dark} />
          <rect x="34" y="50" width="52" height="20" fill="white" opacity="0.85" />
        </g>
      );
    case "juicebox":
      return (
        <g>
          <rect x="32" y="30" width="56" height="66" rx="6" fill={colors.primary} />
          <polygon points="32,30 88,30 80,18 40,18" fill={colors.dark} />
          <rect
            x="70"
            y="6"
            width="6"
            height="20"
            rx="2"
            fill={colors.dark}
            transform="rotate(20 73 16)"
          />
          <rect x="42" y="54" width="36" height="18" rx="3" fill="white" opacity="0.85" />
        </g>
      );
    case "bag":
      return (
        <g>
          <path
            d="M34 26 L86 26 L94 46 Q98 70 90 92 Q86 104 60 104 Q34 104 30 92 Q22 70 26 46 Z"
            fill={colors.primary}
          />
          <path d="M34 26 L86 26 L82 16 L38 16 Z" fill={colors.dark} />
          <ellipse cx="60" cy="62" rx="24" ry="18" fill="white" opacity="0.85" />
        </g>
      );
    case "jar":
      return (
        <g>
          <rect x="34" y="30" width="52" height="14" rx="4" fill={colors.dark} />
          <rect x="30" y="42" width="60" height="62" rx="10" fill={colors.primary} />
          <rect x="38" y="60" width="44" height="26" rx="4" fill="white" opacity="0.85" />
        </g>
      );
    case "tub":
      return (
        <g>
          <rect x="22" y="28" width="76" height="12" rx="4" fill={colors.dark} />
          <path d="M28 40 L92 40 L84 96 Q60 102 36 96 Z" fill={colors.primary} />
          <ellipse cx="60" cy="68" rx="26" ry="16" fill="white" opacity="0.85" />
        </g>
      );
    default:
      return <rect x="30" y="30" width="60" height="60" rx="8" fill={colors.primary} />;
  }
}
