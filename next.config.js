/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "antd",
    "rc-util",
    "@babel/runtime",
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "rc-pagination",
    "rc-picker",
    "rc-tree",
    "rc-table"
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "img.freepik.com",
      "res.cloudinary.com",
    ],
  },
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
