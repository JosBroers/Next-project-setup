const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
	images: {
		domains: ["ik.imagekit.io"],
	},
	sassOptions: {
		prependData: `
			@import "./styles/common/_unit.scss";
			@import "./styles/common/_animations.scss";
		`,
	},
	async redirects() {
		return [
			{
				source: "/home",
				destination: "/",
				permanent: true,
			},
		]
	},
	future: {
		webpack5: true,
	},
})
