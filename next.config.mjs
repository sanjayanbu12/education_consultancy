/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",  // Commented out to support dynamic routes in development  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
