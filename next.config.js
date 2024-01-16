/** @type {import('next').NextConfig} */

// const withTM = require("next-transpile-modules")([
//   "three",
//   "react-three-fiber",
//   "drei",
// ]);

const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
// module.exports = withTM;
