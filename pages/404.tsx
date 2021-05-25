import React from "react"
import Head from "next/head"
import { Flex, Box } from "reflexbox/styled-components"
import Link from "next/link"

/* Component imports */
import Container from "../components/Container"

const Error = () => (
	<>
		<Head>
			<title>Page not found | Next Project Setup</title>
		</Head>
		<Container>
			<Flex height={"100vh"} justifyContent="center" alignItems="center">
				<Box textAlign="center" width={[1, 1, 1, 1, 3 / 5]}>
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

export default Error
