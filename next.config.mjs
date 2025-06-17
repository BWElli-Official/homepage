const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/dj-bwelli-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dj-bwelli-website/' : '',
}

export default nextConfig
