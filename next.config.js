/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    prependData: `@import "./src/styles/variables.scss";`,
  },
  optimizeFonts: false,
};

module.exports = nextConfig;
