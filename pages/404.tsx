import React from "react"
import styled from "styled-components"
import { NextSeo } from "next-seo"

const Container = styled.div`
  width: calc(100% - 40px);
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    font-size: 35px;
    line-height: 1.5em;
  }
`

export default function Home() {
  const title = "Page not found"
  const image = "/images/thumbnail.png"

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title: title,
          images: [
            {
              url: image,
            },
          ],
        }}
      />
      <Container>
        <h1>Page not found!</h1>
        <p>
          It seems that the page you are trying to visit does not exist (anymore). Click on the
          button to go back to the homepage.
        </p>
      </Container>
    </>
  )
}
