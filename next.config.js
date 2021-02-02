/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ["ik.imagekit.io"],
    deviceSizes: [320, 480, 640, 800, 960, 1120, 1280, 1440, 1600, 1760, 1920, 2080, 2240, 3840],
  },
})
