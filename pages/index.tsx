import React from "react"
import Head from "next/head"

// Component
import Container from "../components/Container"
import { Col, Row } from "../components/flexbox"

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage | Next Project Setup</title>
        <meta
          name="description"
          content="This repository is a setup project which can be used for starting an application with
          Next.js."
        />
      </Head>
      <Container>
        <Row>
          <Col>
            <h1>Next.js Project Setup</h1>
            <p>
              This repository is a setup project which can be used for starting an application with
              Next.js. This template uses:
            </p>
            <ul>
              <li>
                <a
                  href="https://www.typescriptlang.org/"
                  title="TypeScript"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  TypeScript
                </a>
              </li>
              <li>
                <a
                  href="https://sass-lang.com/"
                  title="SCSS"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  SCSS
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css"
                  title="Component-Level CSS"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  CSS Modules
                </a>
              </li>
              <li>
                <a
                  href="https://eslint.org/"
                  title="ESLint"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ESLint
                </a>
              </li>
              <li>
                <a
                  href="https://stylelint.io/"
                  title="Stylelint"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Stylelint
                </a>
              </li>
              <li>
                <a
                  href="https://prettier.io/"
                  title="Prettier"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Prettier
                </a>
              </li>
              <li>
                <a
                  href="https://get.foundation/sites/docs/sass-functions.html#rem-calc"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Foundation rem-calc() function
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/docs/preflight"
                  title="Tailwind Preflight"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Tailwind Preflight
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}
