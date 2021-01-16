import React from "react"
import styled from "styled-components"
import { NextSeo } from "next-seo"

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 25px;
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
