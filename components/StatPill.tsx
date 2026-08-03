import type { TrendStat } from "@/lib/data";
import { iconMap } from "@/components/icons";

const iconStyles: Record<TrendStat["icon"], string> = {
  zap: "bg-amber-50 text-amber-600",
  ghost: "bg-purple-50 text-purple-600",
  trophy: "bg-rose-50 text-rose-600",
  popcorn: "bg-red-50 text-red-600",
  leaf: "bg-emerald-50 text-emerald-600",
};

export function StatPill({ icon, label, value, sublabel }: TrendStat) {
  const Icon = iconMap[icon];
  const isPositive = value.startsWith("+");

  return (
    <div className="flex flex-1 flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4">
      <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconStyles[icon]}`}>
        <Icon className="h-4 w-4" />
      </span>
      <div className="text-sm font-medium text-zinc-500">{label}</div>
      <div className={`text-lg font-semibold ${isPositive ? "text-emerald-600" : "text-zinc-900"}`}>
        {value}
      </div>
      {sublabel && <div className="text-xs text-zinc-400">{sublabel}</div>}
    </div>
  );
}
