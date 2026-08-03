import type { NextConfig } from "next";
import path from "path";

const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(isGithubPages
    ? { basePath: "/trendiq", assetPrefix: "/trendiq/" }
    : {}),
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
