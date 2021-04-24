import React from "react"
import Head from "next/head"
import { Flex, Box } from "reflexbox/styled-components"

// Component imports
import Container from "../components/Container"

const Error = () => (
	<>
		<Head>
			<title>Internal server error | Next Project Setup</title>
		</Head>
		<Container>
			<Flex>
				<Box width={[1, 1, 1, 1, 8 / 12]}>
					<h1>Internal server error!</h1>
					<p>
						It seems that the server you are trying to reach has a problem. Please reload the page
						or try again later.
					</p>
				</Box>
			</Flex>
		</Container>
	</>
)

export default Error
