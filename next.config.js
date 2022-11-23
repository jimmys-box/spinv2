/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/cart/checkout': { page: '/cart/checkout' },
      '/communaute': { page: '/communaute' },
      '/enregistrement': { page: '/enregistrement' },
      '/login': { page: '/login' },
      '/mon-arene': { page: '/mon-arene' },
      '/play': { page: '/play' },

 
    }
  },
}
