import React from "react"
import Container from "../components/container"

export default {
  title: "Container",
}

export const Default = (args: { title: string; content: string }) => (
  <Container>
    <h1>{args.title}</h1>
    <p>{args.content}</p>
  </Container>
)

Default.args = {
  title: "Next.js Project Setup",
  content:
    "This repository is a setup project which can be used for starting an application with Next.js.",
}
