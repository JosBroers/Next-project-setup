import React from "react"
import styled from "styled-components"
import { NextSeo } from "next-seo"

const Container = styled.div``

export default function Home() {
  const title = "404"
  const description = ""
  const image = ""

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
        <h1>Page Not Found</h1>
      </Container>
    </>
  )
}
