import React from "react"
import type { AppProps } from "next/app"
import Head from "next/head"

// CSS Imports
import "normalize.css/normalize.css"
import "../fonts.css"
import "../styles/global.scss"

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
