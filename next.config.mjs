const nextConfig = {
  // Remove output: 'export' - Vercel doesn't need this
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix - Vercel handles this automatically
}

export default nextConfig