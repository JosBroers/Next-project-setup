import React from "react"
import { AppProps } from "next/app"
import { NextSeo } from "next-seo"
import { AnimatePresence, motion } from "framer-motion"

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
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                velocity: 100,
                type: "Inertia",
              },
            },
            pageExit: {
              opacity: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MyApp
