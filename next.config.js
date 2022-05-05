/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  include: path.resolve(__dirname, "./src/assets/svg"),
  webpack(config, options) {
    return config;
  },
  env: {
    API_BASE_URL: "http://cgnation.php-master.ir/api/",
  },
});
