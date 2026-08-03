export type IconName =
  | "zap"
  | "ghost"
  | "trophy"
  | "popcorn"
  | "leaf";

export type TrendStat = {
  icon: IconName;
  label: string;
  value: string;
  sublabel: string;
};

export type Brand = "Bowl & Basket" | "Paperbird" | "Wholesome Pantry";

export type PackageShape =
  | "bar"
  | "box"
  | "pouch"
  | "bottle"
  | "can"
  | "juicebox"
  | "bag"
  | "jar"
  | "tub";

export type Product = {
  id: string;
  brand: Brand;
  name: string;
  variant: string;
  sku: string;
  suggestedQty: string;
  reason: string;
  category: string;
  shape: PackageShape;
};

export type Bundle = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  confidence: number;
  description: string;
  whyRecommended: string;
  demandStrength: number;
  storesUsing: number;
  sellsOutIn: string;
  whyBullets: string[];
  frequentlyBoughtWith: string[];
  seasonality: string;
  consumerInterest: string;
  products: Product[];
};

export const brandStyles: Record<Brand, string> = {
  "Bowl & Basket": "bg-sky-50 text-sky-700",
  Paperbird: "bg-amber-50 text-amber-700",
  "Wholesome Pantry": "bg-emerald-50 text-emerald-700",
};

export const trendStats: TrendStat[] = [
  { icon: "zap", label: "High Protein Foods", value: "+34%", sublabel: "vs last 30 days" },
  { icon: "ghost", label: "Halloween Prep", value: "+27%", sublabel: "vs last 30 days" },
  { icon: "trophy", label: "Game Day", value: "Starts in 3 weeks", sublabel: "" },
  { icon: "popcorn", label: "Movie Night", value: "+18%", sublabel: "vs last 30 days" },
  { icon: "leaf", label: "Wellness & Clean Eating", value: "+21%", sublabel: "vs last 30 days" },
];

export const bundles: Bundle[] = [
  {
    id: "fuel-your-basket",
    tag: "High Opportunity",
    title: "Fuel Your Basket",
    subtitle: "High Protein · Health Trend",
    confidence: 94,
    description:
      "A ready-made Bowl & Basket Protein Pack — eggs, dairy, and nuts bundled together with 70g+ of protein per pack to meet the growing protein trend.",
    whyRecommended:
      "Stores like yours have seen a noticeable jump in protein purchases this quarter — this all-in-one protein pack is built to capture that demand.",
    demandStrength: 90,
    storesUsing: 1100,
    sellsOutIn: "~3 weeks",
    whyBullets: [
      "Rising increase in protein purchases across similar stores",
      "Frequently bought together across eggs, dairy, and nuts",
      "Seasonality: Back to School, Summer Fitness",
      "Consumer interest: Fitness, Meal Prep, Healthy Snacks",
    ],
    frequentlyBoughtWith: ["Liquid Egg Whites", "Greek Yogurt", "Chopped Almonds"],
    seasonality: "Back to School, Summer Fitness",
    consumerInterest: "Fitness, Meal Prep, Healthy Snacks",
    products: [
      { id: "p1", brand: "Bowl & Basket", name: "Liquid Egg Whites", variant: "Cage Free", sku: "70001", suggestedQty: "8 cases", reason: "Anchors the protein pack lineup", category: "Dairy", shape: "tub" },
      { id: "p2", brand: "Bowl & Basket", name: "Turkey Bacon", variant: "Dark Meat Turkey, Chopped & Formed", sku: "70002", suggestedQty: "6 cases", reason: "Popular high-protein breakfast item", category: "Meat", shape: "pouch" },
      { id: "p3", brand: "Bowl & Basket", name: "Lowfat Cottage Cheese", variant: "Small Curd, 1% Milkfat", sku: "70003", suggestedQty: "8 cases", reason: "High demand item", category: "Dairy", shape: "tub" },
      { id: "p4", brand: "Bowl & Basket", name: "Chopped Almonds", variant: "Unsalted", sku: "70004", suggestedQty: "5 cases", reason: "Complements protein pack", category: "Nuts", shape: "pouch" },
      { id: "p5", brand: "Bowl & Basket", name: "Greek Yogurt", variant: "Nonfat, Plain", sku: "70005", suggestedQty: "9 cases", reason: "Top seller in similar stores", category: "Dairy", shape: "tub" },
      { id: "p6", brand: "Bowl & Basket", name: "Chia Seeds", variant: "Original", sku: "70006", suggestedQty: "4 cases", reason: "Rising category star", category: "Nuts", shape: "pouch" },
    ],
  },
  {
    id: "winning-game-day",
    tag: "High Opportunity",
    title: "Winning Game Day",
    subtitle: "Snacks · Appetizers · Serves 4",
    confidence: 91,
    description:
      "The Bowl & Basket Winning Basket — jerky, chips, salsa, and hot appetizers bundled together for game day. Snack like a champion, the Wakefern way.",
    whyRecommended:
      "Snack and appetizer purchases spike near your store on game weekends — this winning basket is built to capture that demand.",
    demandStrength: 87,
    storesUsing: 850,
    sellsOutIn: "~2 weeks",
    whyBullets: [
      "Notable spike in snack and appetizer purchases on game weekends",
      "Frequently bought together across jerky, chips, and salsa",
      "Seasonality: Football Season, Super Bowl",
      "Consumer interest: Parties, Tailgating, Sports Fans",
    ],
    frequentlyBoughtWith: ["Beef Jerky", "Tortilla Chips", "Salsa"],
    seasonality: "Football Season, Super Bowl",
    consumerInterest: "Parties, Tailgating, Sports Fans",
    products: [
      { id: "p1", brand: "Bowl & Basket", name: "Steak Cut Beef Jerky", variant: "Premium Seasoned, Original", sku: "71001", suggestedQty: "10 cases", reason: "Top seller in similar stores", category: "Jerky", shape: "pouch" },
      { id: "p2", brand: "Bowl & Basket", name: "Restaurant Style Tortilla Chips", variant: "Stone Ground", sku: "71002", suggestedQty: "14 cases", reason: "High demand item", category: "Snacks", shape: "bag" },
      { id: "p3", brand: "Bowl & Basket", name: "Restaurant Style Salsa", variant: "Medium", sku: "71003", suggestedQty: "9 cases", reason: "Complements chip lineup", category: "Essentials", shape: "jar" },
      { id: "p4", brand: "Bowl & Basket", name: "Cola", variant: "Classic Soda", sku: "71004", suggestedQty: "12 cases", reason: "Strong add-on sales", category: "Soda", shape: "bottle" },
      { id: "p5", brand: "Bowl & Basket", name: "Pigs in a Blanket", variant: "Fully Cooked", sku: "71005", suggestedQty: "8 cases", reason: "Rising category star", category: "Appetizers", shape: "box" },
      { id: "p6", brand: "Bowl & Basket", name: "Stuffed Jalapeños", variant: "Cheese Stuffed", sku: "71006", suggestedQty: "8 cases", reason: "High repeat purchase rate", category: "Appetizers", shape: "box" },
    ],
  },
  {
    id: "mango-sticky-rice",
    tag: "On The Rise",
    title: "Mango Sticky Rice: The Wakefern Way",
    subtitle: "Dessert Bundle · Bowl & Basket",
    confidence: 88,
    description:
      "Everything needed to make an authentic mango sticky rice dessert at home — jasmine rice, coconut milk, and mango chunks bundled together as a single Bowl & Basket kit.",
    whyRecommended:
      "Pre-built dessert kits like this drive strong register-lane pickup — an easy, ready-made treat shoppers can grab in one trip.",
    demandStrength: 83,
    storesUsing: 620,
    sellsOutIn: "~4 weeks",
    whyBullets: [
      "Notable increase in ready-made dessert kit purchases",
      "Frequently bought together across rice, coconut milk, and mango",
      "Seasonality: Summer, Family Gatherings",
      "Consumer interest: Easy Desserts, Family Meals, Trying New Recipes",
    ],
    frequentlyBoughtWith: ["Jasmine Rice", "Coconut Milk", "Mango Chunks"],
    seasonality: "Summer, Family Gatherings",
    consumerInterest: "Easy Desserts, Family Meals, Trying New Recipes",
    products: [
      { id: "p1", brand: "Bowl & Basket", name: "Jasmine White Rice", variant: "Long Grain", sku: "72001", suggestedQty: "10 cases", reason: "Anchors the dessert bundle", category: "Rice", shape: "bag" },
      { id: "p2", brand: "Bowl & Basket", name: "Coconut Milk", variant: "Unsweetened", sku: "72002", suggestedQty: "9 cases", reason: "Top seller in similar stores", category: "Canned Goods", shape: "can" },
      { id: "p3", brand: "Bowl & Basket", name: "Mango Chunks", variant: "Frozen", sku: "72003", suggestedQty: "8 cases", reason: "High demand item", category: "Frozen", shape: "bag" },
      { id: "p4", brand: "Bowl & Basket", name: "Sweetened Condensed Milk", variant: "Original", sku: "72004", suggestedQty: "7 cases", reason: "Complements coconut milk", category: "Canned Goods", shape: "can" },
      { id: "p5", brand: "Bowl & Basket", name: "Vanilla Extract", variant: "Pure", sku: "72005", suggestedQty: "4 cases", reason: "Rounds out the dessert kit", category: "Baking", shape: "bottle" },
      { id: "p6", brand: "Bowl & Basket", name: "Brown Sugar", variant: "Light Brown", sku: "72006", suggestedQty: "6 cases", reason: "Rising category star", category: "Baking", shape: "box" },
      { id: "p7", brand: "Bowl & Basket", name: "Coconut Flakes", variant: "Sweetened", sku: "72007", suggestedQty: "5 cases", reason: "Strong add-on sales", category: "Baking", shape: "bag" },
    ],
  },
];

export function getBundle(id: string): Bundle | undefined {
  return bundles.find((b) => b.id === id);
}
