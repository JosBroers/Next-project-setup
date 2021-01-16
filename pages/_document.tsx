import React from "react"
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="nl">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preload" href="/fonts/Inter-Thin.woff2" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Inter-ExtraLight.woff2" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Inter-Light.woff2" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Inter-Medium.woff2" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Inter-SemiBold.woff2" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Inter-Bold.woff2" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Inter-Black.woff2" as="font" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
