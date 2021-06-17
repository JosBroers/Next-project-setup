import React, { useEffect } from "react"
import type { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import NProgress from "nprogress"

/* CSS imports */
import "../styles/main.scss"

/* Component imports */
import { CookieNotice } from "../components/cookies"
import GoogleTagManager from "../components/GoogleTagManager"

/* Breakpoints for Styled Components */
const theme = {
	breakpoints: ["576px", "768px", "992px", "1024px"],
}

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	/* Page URL */
	const url = process.env.NEXT_PUBLIC_SITE_URL + router.pathname

	/* NProgress */
	useEffect(() => {
		const routeChangeStart = () => NProgress.start()
		const routeChangeComplete = () => NProgress.done()

		router.events.on("routeChangeStart", routeChangeStart)
		router.events.on("routeChangeComplete", routeChangeComplete)
		router.events.on("routeChangeError", routeChangeComplete)

		return () => {
			router.events.off("routeChangeStart", routeChangeStart)
			router.events.off("routeChangeComplete", routeChangeComplete)
			router.events.off("routeChangeError", routeChangeComplete)
		}
	}, [])

	return (
		<GoogleTagManager>
			<ThemeProvider theme={theme}>
				<Head>
					<link
						rel="shortcut icon"
						type="image/png"
						href={`${process.env.NEXT_PUBLIC_IMAGEKIT}favicon_UMYJ6XtNm.png`}
					/>
					<link rel="canonical" href={url} />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta property="og:url" content={url} />
					<meta name="robots" content="index, follow" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
					<meta name="theme-color" content="#000" />
				</Head>
				<CookieNotice />
				<Component {...pageProps} />
			</ThemeProvider>
		</GoogleTagManager>
	)
}

export default MyApp
