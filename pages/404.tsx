import React from "react"
import styled from "styled-components"
import { NextSeo } from "next-seo"

const Container = styled.div``

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
        <h1>This page cannot be found.</h1>
      </Container>
    </>
  )
}
