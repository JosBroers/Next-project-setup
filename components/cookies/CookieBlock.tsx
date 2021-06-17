import React from "react"
import { Flex } from "reflexbox/styled-components"
import styles from "../../styles/components/cookies/cookie-block.module.scss"

interface CookieBlockProps {
	description: string
	name: string
	domain: string
	expires: string
}

const CookieBlock = (Props: CookieBlockProps) => {
	const { description, name, domain, expires } = Props
	return (
		<div className={styles["cookie-block"]}>
			<p className={styles["cookie-block__description"]}>{description}</p>
			<Flex justifyContent="space-between" flexWrap={["wrap", "wrap", "nowrap"]}>
				<div className={styles["cookie-block__item"]}>
					<div className={styles["cookie-block__head"]}>Name</div>
					<div className={styles["cookie-block__info"]}>
						<code>{name}</code>
					</div>
				</div>
				<div className={styles["cookie-block__item"]}>
					<div className={styles["cookie-block__head"]}>Domain</div>
					<div className={styles["cookie-block__info"]}>
						<code>{domain}</code>
					</div>
				</div>
				<div className={styles["cookie-block__item"]}>
					<div className={styles["cookie-block__head"]}>Expires</div>
					<div className={styles["cookie-block__info"]}>{expires}</div>
				</div>
			</Flex>
		</div>
	)
}

export default CookieBlock
