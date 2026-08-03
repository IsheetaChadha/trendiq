import { notFound } from "next/navigation";
import { bundles, getBundle } from "@/lib/data";
import { BundleDetail } from "@/components/BundleDetail";

export function generateStaticParams() {
  return bundles.map((bundle) => ({ id: bundle.id }));
}

export default async function BundlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bundle = getBundle(id);

  if (!bundle) {
    notFound();
  }

  return <BundleDetail bundle={bundle} />;
}
