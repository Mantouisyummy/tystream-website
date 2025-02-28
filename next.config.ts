import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.cache = {
      type: "filesystem", // 使用檔案系統快取
      buildDependencies: {
        config: [__filename],
      },
    };

    config.experiments = {
      layers: true,
      cacheUnaffected: true, // 減少不必要的快取影響
    };

    return config;
  },
};

export default nextConfig;
