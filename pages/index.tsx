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
				<p>
					This repository is a setup project which can be used for starting an application with
					Next.js.
				</p>
			</Container>
		</>
	)
}
