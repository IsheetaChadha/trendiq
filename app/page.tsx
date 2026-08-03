import { Topbar } from "@/components/Topbar";
import { StatPill } from "@/components/StatPill";
import { BundleCard } from "@/components/BundleCard";
import { trendStats, bundles } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Topbar />
      <main className="flex-1 px-4 py-6 sm:px-8 sm:py-8">
        <h1 className="text-xl font-semibold text-zinc-900 sm:text-2xl">Good morning, Sarah! 👋</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Here are today&apos;s top opportunities, powered by EagleEye trend insights.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {trendStats.map((stat) => (
            <StatPill key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-900">Recommended for Your Store</h2>
          <span className="text-sm font-medium text-red-600">See all</span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {bundles.map((bundle) => (
            <BundleCard key={bundle.id} bundle={bundle} />
          ))}
        </div>
      </main>
    </>
  );
}
