import React from "react"
import Head from "next/head"

// Component Imports
import Container from "@components/Container"

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
				<h1>Next.js Project Setup</h1>
				<div className={"row"}>
					<div className={"col-xs-12 col-lg-9"}>
						<div className={"box"}>
							<p>
								This repository is a setup project which can be used for starting an application
								with Next.js. This template uses:
							</p>
							<ul>
								<li><a href={"https://www.typescriptlang.org/"} title={"TypeScript"}>TypeScript</a>
								</li>
								<li><a href={"https://sass-lang.com/"} title={"SCSS"}>SCSS</a></li>
								<li><a
									href={"https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css"}
									title={"Component-Level CSS"}>CSS Modules</a></li>
								<li><a href={"https://prettier.io/"} title={"Prettier"}>Prettier</a></li>
								<li><a href={"https://get.foundation/sites/docs/sass-functions.html#rem-calc"}>Foundation
									rem-calc() function</a>
								</li>
								<li><a href={"https://tailwindcss.com/docs/preflight"}
								       title={"Tailwind Preflight"}>Tailwind Preflight</a></li>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
