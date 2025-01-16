/** @type {import('next').NextConfig} */
const nextConfig = {
  // 基础配置
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig; 