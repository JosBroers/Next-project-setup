import React from "react"
import type { AppProps } from "next/app"
import Head from "next/head"
import { NextSeo } from "next-seo"

import "../fonts.css"
import GlobalStyle from "../styles/index"

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const url = "https://next-project-setup.vercel.app" + router.pathname
  const siteName = "Next Project Setup"
  const title = "Next Project Setup"
  const description = ""
  const image = ""

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <NextSeo
        titleTemplate={"%s | " + siteName}
        title={title}
        noindex={true} // Remove
        nofollow={true} // Remove
        description={description}
        canonical={url}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "initial-scale=1.0, width=device-width",
          },
          {
            name: "theme-color",
            content: "#000",
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
        ]}
        openGraph={{
          type: "website",
          url: url,
          title: title,
          description: description,
          site_name: siteName,
          images: [
            {
              url: image,
            },
          ],
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
