import React from "react"
import type { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "styled-components"

// CSS
import "../styles/main.scss"

const theme = {
	breakpoints: ["576px", "768px", "992px", "1024px"],
}

const MyApp = ({ Component, pageProps }: AppProps) => (
	<ThemeProvider theme={theme}>
		<Head>
			<link rel="shortcut icon" href="/images/favicon.png" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<Component {...pageProps} />
	</ThemeProvider>
)

export default MyApp
