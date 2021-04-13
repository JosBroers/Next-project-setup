import React from "react"
import Head from "next/head"

// Component
import Container from "../components/Container"

const Error = () => (
	<>
		<Head>
			<title>Internal server error | Next Project Setup</title>
		</Head>
		<Container>
			<h1>Internal server error!</h1>
			<p>
				It seems that the server you are trying to reach has a problem. Please reload the page or
				try again later.
			</p>
		</Container>
	</>
)

export default Error
