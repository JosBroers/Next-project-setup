import React from "react"
import Head from "next/head"

import Container from "../components/container"

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage | Next Project Setup</title>
      </Head>
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
