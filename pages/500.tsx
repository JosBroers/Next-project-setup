import React from "react"
import Head from "next/head"
import { Flex, Box } from "reflexbox/styled-components"
import Link from "next/link"

// Component imports
import Container from "../components/Container"

const Error = () => (
	<>
		<Head>
			<title>Internal server error | Next Project Setup</title>
		</Head>
		<Container>
			<Flex height={"100vh"} justifyContent="center" alignItems="center">
				<Box textAlign="center" width={[1, 1, 1, 1, 3 / 5]}>
					<h1>Internal server error!</h1>
					<p>
						It seems that the server you are trying to reach has a problem. Please reload the page
						or try again later.
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
