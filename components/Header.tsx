import React from "react"
import Image from "next/image"

// CSS imports
import styles from "../styles/components/header.module.scss"

const Header = () => (
	<header className={styles.header}>
		<Image
			src="https://ik.imagekit.io/jobrodo/jobrodo/thumbnail_JHMOxBSr9F4.png"
			alt="Thumbnail"
			layout="fill"
			objectFit="cover"
			objectPosition="center"
		/>
	</header>
)

export default Header
