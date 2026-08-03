import type { NextConfig } from "next";
import path from "path";

const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const basePath = isGithubPages ? "/trendiq" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(isGithubPages ? { basePath, assetPrefix: `${basePath}/` } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
