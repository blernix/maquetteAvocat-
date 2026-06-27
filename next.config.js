/** @type {import('next').NextConfig} */
const nextConfig = {
  serverActions: false,
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
