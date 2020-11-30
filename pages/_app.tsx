import React from "react"
import { AppProps } from "next/app"
import { NextSeo } from "next-seo"

import "../fonts/inter.css"
import GlobalStyle from "../styles/index"

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const url = "https://next-project-setup.vercel.app" + router.pathname
  const title = "Next Project Setup"
  const description = ""
  const image = ""
  const siteName = "Next Project Setup"

  return (
    <>
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

export default MyApp
