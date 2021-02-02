import React from "react"
import Document, { Head, Html, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="nl">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preload" href="/fonts/Inter.var.woff2" as="font" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
