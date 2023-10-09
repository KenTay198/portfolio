/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    prependData: `@import "./src/styles/variables.scss";`,
  },
};

module.exports = nextConfig;
