import React from "react"
import Head from "next/head"
import { Flex, Box } from "reflexbox/styled-components"

// Component imports
import Container from "../components/Container"
import Header from "../components/Header"

// Icon imports
import { GithubIcon } from "../icons"

const Home = () => {
	const title = "Next Project Setup: the advanced starter-kit for Next.js"
	const description =
		"This repository is a setup project which can be used for starting an application with Next.js."
	const image = "https://ik.imagekit.io/jobrodo/jobrodo/thumbnail_JHMOxBSr9F4.png"

	return (
		<>
			<Head>
				{/* SEO Title */}
				<title>{title}</title>
				<meta property="og:title" content={title} />
				<meta name="twitter:title" content={title} />

				{/* SEO Description */}
				<meta name="description" content={description} />
				<meta property="og:description" content={description} />
				<meta name="twitter:description" content={description} />

				{/* SEO Share Image */}
				<meta property="og:image" content={image} />
				<meta name="twitter:image" content={image} />
			</Head>
			<Container>
				<Flex
					justifyContent="space-between"
					alignItems="center"
					width={[1, 1, 1, 1, 9 / 12]}
					margin="50px auto 30px"
				>
					<h1 className="no-margin">Next.js Project Setup</h1>
					<a
						href="https://github.com/JosBroers/next-project-setup"
						title="GitHub"
						target="_blank"
						rel="noreferrer"
					>
						<GithubIcon height={25} width={25} />
					</a>
				</Flex>
				<Header />
				<Flex>
					<Box width={[1, 1, 1, 1, 9 / 12]} margin="0 auto">
						<p>
							This repository is a setup project which can be used for starting an application with
							Next.js. This template uses:
						</p>
						<ul>
							<li>
								<a
									href="https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css"
									title="Component-Level CSS"
									target="_blank"
									rel="noreferrer"
								>
									CSS Modules
								</a>
							</li>
							<li>
								<a href="https://day.js.org/" title="Day.js" target="_blank" rel="noreferrer">
									Day.js
								</a>
							</li>
							<li>
								<a
									href="https://tagmanager.google.com/"
									title="Google Tag Manager"
									target="_blank"
									rel="noreferrer"
								>
									Google Tag Manager
								</a>
							</li>
							<li>
								<a href="https://eslint.org/" title="ESLint" target="_blank" rel="noreferrer">
									ESLint
								</a>
							</li>
							<li>
								<a
									href="https://get.foundation/sites/docs/sass-functions.html#rem-calc"
									target="_blank"
									title="Foundation rem-calc() function"
									rel="noreferrer"
								>
									Foundation rem-calc() function
								</a>
							</li>
							<li>
								<a href="https://imagekit.io/" target="_blank" title="Imagekit.io" rel="noreferrer">
									Imagekit.io
								</a>
							</li>
							<li>
								<a
									href="https://ricostacruz.com/nprogress/"
									target="_blank"
									title="NProgress.js"
									rel="noreferrer"
								>
									NProgress.js
								</a>
							</li>
							<li>
								<a href="https://prettier.io/" title="Prettier" target="_blank" rel="noreferrer">
									Prettier
								</a>
							</li>
							<li>
								<a
									href="https://rebassjs.org/reflexbox/"
									title="Reflexbox"
									target="_blank"
									rel="noreferrer"
								>
									Reflexbox
								</a>
							</li>
							<li>
								<a href="https://sass-lang.com/" title="SCSS" target="_blank" rel="noreferrer">
									SCSS
								</a>
							</li>
							<li>
								<a
									href="https://styled-components.com/"
									title="Styled Components"
									target="_blank"
									rel="noreferrer"
								>
									Styled Components
								</a>
							</li>
							<li>
								<a href="https://stylelint.io/" title="Stylelint" target="_blank" rel="noreferrer">
									Stylelint
								</a>
							</li>
							<li>
								<a
									href="https://tailwindcss.com/docs/preflight"
									title="Tailwind Preflight"
									target="_blank"
									rel="noreferrer"
								>
									Tailwind Preflight
								</a>
							</li>
							<li>
								<a
									href="https://www.typescriptlang.org/"
									title="TypeScript"
									target="_blank"
									rel="noreferrer"
								>
									TypeScript
								</a>
							</li>
							<li>
								<a
									href="https://www.npmjs.com/package/universal-cookie"
									title="Universal cookies"
									target="_blank"
									rel="noreferrer"
								>
									Universal cookies
								</a>
							</li>
						</ul>
					</Box>
				</Flex>
			</Container>
		</>
	)
}

export default Home
