import React from "react"
import Document, { Head, Html, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="nl">
				<Head>
					<meta charSet="utf-8" />
					<link rel="preload" href="/fonts/Inter-Roman.var.woff2" as="font" crossOrigin="" />
					<link rel="preload" href="/fonts/Inter-Italic.var.woff2" as="font" crossOrigin="" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
