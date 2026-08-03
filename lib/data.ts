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

export type Product = {
  id: string;
  brand: Brand;
  name: string;
  variant: string;
  sku: string;
  suggestedQty: string;
  reason: string;
  category: string;
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
      "A curated mix of top-performing high protein snacks, drinks, and meal solutions built around the growing protein trend, drawing on your house brands.",
    whyRecommended:
      "Stores like yours have seen a noticeable jump in protein purchases this quarter — this assortment is built to capture that demand.",
    demandStrength: 90,
    storesUsing: 1100,
    sellsOutIn: "~3 weeks",
    whyBullets: [
      "Rising increase in protein purchases across similar stores",
      "Frequently bought together across bars, drinks, and jerky",
      "Seasonality: Back to School, Summer Fitness",
      "Consumer interest: Fitness, Meal Prep, Healthy Snacks",
    ],
    frequentlyBoughtWith: ["Protein Bars", "Protein Drinks", "Jerky"],
    seasonality: "Back to School, Summer Fitness",
    consumerInterest: "Fitness, Meal Prep, Healthy Snacks",
    products: [
      { id: "p1", brand: "Wholesome Pantry", name: "Protein Bar", variant: "Chocolate Chip Cookie Dough", sku: "48291", suggestedQty: "12 cases", reason: "Top seller in similar stores", category: "Protein Bars" },
      { id: "p2", brand: "Bowl & Basket", name: "Protein Bar", variant: "Cookies & Cream", sku: "48292", suggestedQty: "10 cases", reason: "High demand item", category: "Protein Bars" },
      { id: "p3", brand: "Paperbird", name: "Protein Shake", variant: "Chocolate", sku: "48293", suggestedQty: "8 cases", reason: "Complements protein bars", category: "Drinks" },
      { id: "p4", brand: "Wholesome Pantry", name: "Beef Jerky", variant: "Original", sku: "48294", suggestedQty: "6 cases", reason: "Strong add-on sales", category: "Jerky" },
      { id: "p5", brand: "Bowl & Basket", name: "Core Protein Milk", variant: "Vanilla", sku: "48295", suggestedQty: "8 cases", reason: "Rising category star", category: "Drinks" },
      { id: "p6", brand: "Paperbird", name: "Protein Bar", variant: "Peanut Butter", sku: "48296", suggestedQty: "9 cases", reason: "High repeat purchase rate", category: "Protein Bars" },
      { id: "p7", brand: "Wholesome Pantry", name: "Protein Bar", variant: "Dark Chocolate Nut", sku: "48297", suggestedQty: "7 cases", reason: "Trending in health aisle", category: "Protein Bars" },
      { id: "p8", brand: "Bowl & Basket", name: "Beef Jerky", variant: "Original Beef", sku: "48298", suggestedQty: "5 cases", reason: "Complements jerky lineup", category: "Jerky" },
    ],
  },
  {
    id: "winning-game-day",
    tag: "High Opportunity",
    title: "Winning Game Day",
    subtitle: "Snacks · Beverages · Essentials",
    confidence: 91,
    description:
      "The top-selling snacks, beverages, and party essentials for the biggest game day weekends of the year, built around your house brands.",
    whyRecommended:
      "Snack and beverage purchases spike near your store on game weekends — stock up before the next one hits.",
    demandStrength: 87,
    storesUsing: 850,
    sellsOutIn: "~2 weeks",
    whyBullets: [
      "Notable spike in snack and beverage purchases on game weekends",
      "Frequently bought together across chips, dip, and soda",
      "Seasonality: Football Season, Super Bowl",
      "Consumer interest: Parties, Tailgating, Sports Fans",
    ],
    frequentlyBoughtWith: ["Chips", "Soda", "Dips & Salsa"],
    seasonality: "Football Season, Super Bowl",
    consumerInterest: "Parties, Tailgating, Sports Fans",
    products: [
      { id: "p1", brand: "Bowl & Basket", name: "Tortilla Chips", variant: "Nacho Cheese, Party Size", sku: "51201", suggestedQty: "14 cases", reason: "Top seller in similar stores", category: "Snacks" },
      { id: "p2", brand: "Paperbird", name: "Cola", variant: "12-Pack Cans", sku: "51202", suggestedQty: "16 cases", reason: "High demand item", category: "Beverages" },
      { id: "p3", brand: "Wholesome Pantry", name: "Tortilla Scoops", variant: "Original", sku: "51203", suggestedQty: "10 cases", reason: "Pairs with dip sales", category: "Snacks" },
      { id: "p4", brand: "Bowl & Basket", name: "Potato Chips", variant: "Family Size", sku: "51204", suggestedQty: "12 cases", reason: "Strong add-on sales", category: "Snacks" },
      { id: "p5", brand: "Paperbird", name: "Salsa", variant: "Medium", sku: "51205", suggestedQty: "8 cases", reason: "Complements chip lineup", category: "Essentials" },
      { id: "p6", brand: "Wholesome Pantry", name: "Wing Sauce", variant: "Original", sku: "51206", suggestedQty: "6 cases", reason: "Rising category star", category: "Essentials" },
    ],
  },
  {
    id: "lunchbox-essentials",
    tag: "On The Rise",
    title: "Lunchbox Essentials",
    subtitle: "Back to School · Kids",
    confidence: 88,
    description:
      "The kid-favorite snacks and lunchbox staples parents restock every week during back-to-school season, drawing on your house brands.",
    whyRecommended:
      "Lunchbox snack purchases are climbing in your area this time of year — this assortment keeps your shelves stocked for it.",
    demandStrength: 83,
    storesUsing: 620,
    sellsOutIn: "~4 weeks",
    whyBullets: [
      "Notable increase in lunchbox snack purchases in August",
      "Frequently bought together across crackers, fruit snacks, and juice",
      "Seasonality: Back to School",
      "Consumer interest: Parents, Kids, Quick Snacks",
    ],
    frequentlyBoughtWith: ["Crackers", "Fruit Snacks", "Juice Boxes"],
    seasonality: "Back to School",
    consumerInterest: "Parents, Kids, Quick Snacks",
    products: [
      { id: "p1", brand: "Wholesome Pantry", name: "Cheddar Crackers", variant: "Cheddar", sku: "62301", suggestedQty: "10 cases", reason: "Top seller in similar stores", category: "Crackers" },
      { id: "p2", brand: "Bowl & Basket", name: "Fruit Snacks", variant: "Mixed Fruit", sku: "62302", suggestedQty: "9 cases", reason: "High demand item", category: "Fruit Snacks" },
      { id: "p3", brand: "Paperbird", name: "Juice Drink", variant: "Fruit Punch", sku: "62303", suggestedQty: "8 cases", reason: "Complements lunchbox staples", category: "Juice" },
      { id: "p4", brand: "Bowl & Basket", name: "Original Crackers", variant: "Original", sku: "62304", suggestedQty: "7 cases", reason: "Strong add-on sales", category: "Crackers" },
      { id: "p5", brand: "Wholesome Pantry", name: "Bunny Grahams", variant: "Honey", sku: "62305", suggestedQty: "6 cases", reason: "Rising category star", category: "Crackers" },
      { id: "p6", brand: "Paperbird", name: "Fruit Snacks", variant: "Assorted", sku: "62306", suggestedQty: "5 cases", reason: "High repeat purchase rate", category: "Fruit Snacks" },
    ],
  },
];

export function getBundle(id: string): Bundle | undefined {
  return bundles.find((b) => b.id === id);
}
