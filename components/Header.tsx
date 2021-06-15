import React from "react"
import Image from "next/image"
import styles from "../styles/components/header.module.scss"
import thumbnail from "../public/images/thumbnail.png"

const Header = () => (
	<header className={styles.header}>
		<Image
			src={thumbnail}
			alt="Thumbnail"
			layout="fill"
			objectFit="cover"
			objectPosition="center"
			// placeholder="blur"
		/>
	</header>
)

export default Header
