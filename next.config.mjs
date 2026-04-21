const isCI = process.env.GITHUB_ACTIONS === "true";
const repo = "inman-connect-sd";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isCI ? `/${repo}` : "",
  assetPrefix: isCI ? `/${repo}/` : undefined,
};

export default nextConfig;
