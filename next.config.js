const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})

const ContentSecurityPolicy = `
	default-src 'self';
	font-src 'self';
	img-src * blob: data:;
	media-src * blob: data:;
	style-src 'self' 'unsafe-inline' *.googleapis.com *.googletagmanager.com;
	child-src *.youtube.com *.google.com *.googletagmanager.com;
	script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com;
	connect-src *;
`

const securityHeaders = [
	{
		key: "Content-Security-Policy",
		value: ContentSecurityPolicy.replace(/\n/g, ""),
	},
	{
		key: "Referrer-Policy",
		value: "origin-when-cross-origin",
	},
	{
		key: "X-Frame-Options",
		value: "DENY",
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
	},
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=31536000; includeSubDomains; preload",
	},
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
	},
]

module.exports = withBundleAnalyzer({
	images: {
		domains: ["ik.imagekit.io"],
	},
	sassOptions: {
		prependData: `
			@import "./styles/common/_unit.scss";
			@import "./styles/common/_animations.scss";
			@import "./styles/common/_mixins.scss";
		`,
	},
	async redirects() {
		return [
			{
				source: "/home",
				destination: "/",
				permanent: true,
			},
			{
				source: "/github",
				destination: "/",
				permanent: true,
			},
		]
	},
	experimental: {
		eslint: true,
		turboMode: true,
	},
	trailingSlash: true,
	reactStrictMode: true,
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: securityHeaders,
			},
		]
	},
	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: "preact/compat",
				"react-dom/test-utils": "preact/test-utils",
				"react-dom": "preact/compat",
			})
		}

		return config
	},
})
