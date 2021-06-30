import React, { useEffect } from "react"
import type { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import NProgress from "nprogress"
import "../styles/main.scss"
import Script from "next/script"
import { CookieNotice } from "../components/cookies"
import GoogleTagManager from "../components/GoogleTagManager"
import { GTM_ID } from "../lib/gtm"

const theme = {
	breakpoints: ["576px", "768px", "992px", "1024px"],
}

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	const url = process.env.NEXT_PUBLIC_SITE_URL + router.pathname
	const themeColor = "#000000"

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
	}, [router.events])

	return (
		<>
			<Script
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
			<GoogleTagManager>
				<ThemeProvider theme={theme}>
					<Head>
						<link sizes="16x16" type="image/png" rel="icon" href="/favicons/favicon_16x16.png" />
						<link sizes="32x32" type="image/png" rel="icon" href="/favicons/favicon_32x32.png" />
						<link sizes="96x96" type="image/png" rel="icon" href="/favicons/favicon_96x96.png" />
						<link
							sizes="192x192"
							type="image/png"
							rel="shortcut icon"
							href="/favicons/favicon_192x192.png"
						/>
						<link rel="canonical" href={url} />
						<link rel="manifest" href="/manifest.json" />
						<link rel="apple-touch-icon" href="/favicons/favicon_180x180.png" />
						<meta
							name="viewport"
							content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
						/>
						<meta name="application-name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
						<meta name="apple-mobile-web-app-capable" content="yes" />
						<meta name="apple-mobile-web-app-status-bar-style" content="default" />
						<meta name="apple-mobile-web-app-title" content={process.env.NEXT_PUBLIC_SITE_NAME} />
						<meta name="format-detection" content="telephone=no" />
						<meta name="mobile-web-app-capable" content="yes" />
						<meta name="msapplication-TileColor" content={themeColor} />
						<meta name="msapplication-tap-highlight" content="no" />
						<meta name="robots" content="index, follow" />
						<meta name="theme-color" content={themeColor} />
						<meta name="twitter:card" content="summary" />
						<meta name="twitter:url" content={url} />
						<meta property="og:type" content="website" />
						<meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
						<meta property="og:url" content={url} />
						<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					</Head>
					<CookieNotice />
					<Component {...pageProps} />
				</ThemeProvider>
			</GoogleTagManager>
		</>
	)
}

export default MyApp
