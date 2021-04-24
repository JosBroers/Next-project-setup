import React from "react"
import Head from "next/head"
import { Flex, Box } from "reflexbox/styled-components"

// Component imports
import Container from "../components/Container"
import LineClamp from "../components/LineClamp"

const Home = () => (
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
			<Flex>
				<Box width={[1, 1, 1, 1, 8 / 12]}>
					<h1>Next.js Project Setup</h1>
					<LineClamp component="p" amount={1}>
						This repository is a setup project which can be used for starting an application with
						Next.js. This template uses:
					</LineClamp>
					<ul>
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
								href="https://get.foundation/sites/docs/sass-functions.html#rem-calc"
								target="_blank"
								rel="noreferrer noopener"
							>
								Foundation rem-calc() function
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
								href="https://rebassjs.org/reflexbox/"
								title="Reflexbox"
								target="_blank"
								rel="noreferrer noopener"
							>
								Reflexbox
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
								href="https://styled-components.com/"
								title="Styled Components"
								target="_blank"
								rel="noreferrer noopener"
							>
								Styled Components
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
								href="https://tailwindcss.com/docs/preflight"
								title="Tailwind Preflight"
								target="_blank"
								rel="noreferrer noopener"
							>
								Tailwind Preflight
							</a>
						</li>
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
					</ul>
				</Box>
			</Flex>
		</Container>
	</>
)

export default Home
