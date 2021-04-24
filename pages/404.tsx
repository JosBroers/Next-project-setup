import React from "react"
import Head from "next/head"
import { Flex, Box } from "reflexbox/styled-components"

// Component imports
import Container from "../components/Container"

const Error = () => (
	<>
		<Head>
			<title>Page not found | Next Project Setup</title>
		</Head>
		<Container>
			<Flex>
				<Box width={[1, 1, 1, 1, 8 / 12]}>
					<h1>Page not found!</h1>
					<p>
						It seems that the page you are trying to visit does not exist (anymore). Click on the
						button to go back to the homepage.
					</p>
				</Box>
			</Flex>
		</Container>
	</>
)

export default Error
