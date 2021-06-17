import React from "react"
import Head from "next/head"
import { Flex, Box } from "reflexbox/styled-components"
import Link from "next/link"
import Container from "../components/Container"

const data = {
	title: "Internal server error | Next Project Setup",
}

const Error = () => {
	const { title } = data
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Container>
				<Flex height="100vh" justifyContent="center" alignItems="center">
					<Box textAlign="center" width={[1, null, null, null, 3 / 5]}>
						<h1>Page not found!</h1>
						<p>
							It seems that the page you are trying to visit does not exist (anymore). Click on the
							button to go back to the homepage.
						</p>
						<Link href="/">
							<a title="Homepage">Go back to home</a>
						</Link>
					</Box>
				</Flex>
			</Container>
		</>
	)
}

export default Error
