import React, { useEffect, useState } from "react"
import { Flex, Box } from "reflexbox/styled-components"
import Link from "next/link"
import Cookies from "universal-cookie"
import Router from "next/router"
import styles from "../../styles/components/cookies/cookie-notice.module.scss"
import Button from "../Button"

const CookieNotice = () => {
	const [HideCookieBanner, setHideCookieBanner] = useState(false)

	const cookieClass = HideCookieBanner
		? "cookie-notice__wrapper--hidden"
		: "cookie-notice__wrapper--active"

	useEffect(() => {
		const cookies = new Cookies()

		const date = new Date()
		const year = date.getFullYear()
		const month = date.getMonth()
		const day = date.getDate()
		const expire = new Date(year + 1, month, day)

		if (cookies.get("cookie-consent") === "allowed") {
			setHideCookieBanner(true)
		} else {
			setHideCookieBanner(false)
		}

		if (cookies.get("cookie-consent") !== "allowed" && HideCookieBanner === true) {
			cookies.set("cookie-consent", "allowed", { path: "/", expires: expire })
			Router.reload()
		}
	}, [HideCookieBanner])

	return (
		<div className={`${styles["cookie-notice__wrapper"]} ${styles[cookieClass]}`}>
			<div className={styles["cookie-notice"]}>
				<Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
					<Box className={styles["cookie-notice__content"]} width={[1, 1, 3 / 4]}>
						<p>
							We use{" "}
							<Link href="/cookies/">
								<a title="cookies and similar technologies">cookies and similar technologies</a>
							</Link>{" "}
							to provide you with a great user experience.
						</p>
					</Box>
					<Flex width={[1, 1, 1 / 4]} justifyContent={["flex-start", "flex-start", "flex-end"]}>
						<Box marginTop={["20px", "20px", 0]}>
							<Button
								styling="primary"
								title="Close"
								type="action"
								onClick={() => setHideCookieBanner(true)}
							/>
						</Box>
					</Flex>
				</Flex>
			</div>
		</div>
	)
}

export default CookieNotice
