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
		</>
	)
}

export default MyApp
