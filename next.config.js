/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions : {
    prependData: `@import "./src/styles/variables.scss";`,
  },
  i18n : {
    locales : ["fr", "en"],
    defaultLocale : "fr"
  }
}

module.exports = nextConfig
