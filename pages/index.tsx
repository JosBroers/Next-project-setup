import React from "react"
import Head from "next/head"
import { Flex, Box } from "reflexbox/styled-components"

/* Component imports */
import Container from "../components/Container"
import Header from "../components/Header"
import Button from "../components/Button"

/* Icon imports */
import { GithubIcon } from "../icons"

const Home = () => {
	/* SEO props */
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
						href="https://github.com/JosBroers/next-project-setup/"
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
								<Button
									type="external"
									style="none"
									link="https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css"
									title="CSS Modules"
								/>
							</li>
							<li>
								<Button
									type="external"
									style="none"
									link="https://tagmanager.google.com/"
									title="Google Tag Manager"
								/>
							</li>
							<li>
								<Button type="external" style="none" link="https://eslint.org/" title="ESLint" />
							</li>
							<li>
								<Button
									type="external"
									style="none"
									link="https://get.foundation/sites/docs/sass-functions.html#rem-calc"
									title="Foundation rem-calc() function"
								/>
							</li>
							<li>
								<Button
									type="external"
									style="none"
									link="https://imagekit.io/"
									title="Imagekit.io"
								/>
							</li>
							<li>
								<Button
									type="external"
									style="none"
									link="https://ricostacruz.com/nprogress/"
									title="NProgress.js"
								/>
							</li>
							<li>
								<Button type="external" style="none" link="https://prettier.io/" title="Prettier" />
							</li>
							<li>
								<Button
									type="external"
									style="none"
									link="https://rebassjs.org/reflexbox/"
									title="Reflexbox"
								/>
							</li>
							<li>
								<Button type="external" style="none" link="https://sass-lang.com/" title="SCSS" />
							</li>
							<li>
								<Button
									type="external"
									style="none"
									link="https://styled-components.com/"
									title="Styled Components"
								/>
							</li>
							<li>
								<Button
									type="external"
									style="none"
									link="https://stylelint.io/"
									title="Stylelint"
								/>
							</li>
							<li>
								<Button
									type="external"
									style="none"
									link="https://tailwindcss.com/docs/preflight/"
									title="Tailwind Preflight"
								/>
							</li>
							<li>
								<Button
									type="external"
									style="none"
									link="https://www.typescriptlang.org/"
									title="TypeScript"
								/>
							</li>
							<li>
								<Button
									type="external"
									style="none"
									link="https://www.npmjs.com/package/universal-cookie/"
									title="Universal cookies"
								/>
							</li>
						</ul>
					</Box>
				</Flex>
			</Container>
		</>
	)
}

export default Home
