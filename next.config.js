// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // -> make Next produce a static export (App Router)
  images: {
    unoptimized: true,     // -> disable Next Image optimization for static hosting
  },
};

module.exports = nextConfig;
