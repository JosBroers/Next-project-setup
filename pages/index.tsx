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
  const title = "Homepage"
  const description =
    "This repository is a setup project which can be used for starting an application with Next.js."
  const image = "/images/thumbnail.png"

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          images: [
            {
              url: image,
            },
          ],
        }}
      />
      <Container>
        <h1>Next.js Project Setup</h1>
        <p>
          This repository is a setup project which can be used for starting an application with
          Next.js.
        </p>
      </Container>
    </>
  )
}
