import React from "react"
import Document, { Head, Html, Main, NextScript } from "next/document"

/* Imports libraries */
import { GTM_ID } from "../lib/gtm"

class MyDocument extends Document {
	render() {
		return (
			<Html lang="nl">
				<Head>
					<meta charSet="utf-8" />

					{/* Preloads */}
					<link
						rel="preload"
						href="/fonts/Inter-Roman.var.woff2"
						type="font/woff2"
						as="font"
						crossOrigin
					/>
					<link
						rel="preload"
						href="/fonts/Inter-Italic.var.woff2"
						type="font/woff2"
						as="font"
						crossOrigin
					/>

					{/* Preconnect */}
					<link rel="preconnect" href="https://ik.imagekit.io/" crossorigin />

					{/* DNS Prefetch */}
					<link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
					<link rel="dns-prefetch" href="https://www.google-analytics.com/" />

					{/* Google Tag Manager */}
					<script
						dangerouslySetInnerHTML={{
							__html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
              `,
						}}
					/>
				</Head>
				<body>
					<noscript>
						<iframe
							src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
							height="0"
							width="0"
							style={{ display: "none", visibility: "hidden" }}
						/>
					</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
