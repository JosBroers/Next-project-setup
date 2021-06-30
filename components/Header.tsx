import React from "react"
import Image from "next/image"
import styles from "../styles/components/header.module.scss"

const Header = () => (
	<header className={styles.header}>
		<Image
			src={`${process.env.NEXT_PUBLIC_IMAGEKIT}thumbnail_JHMOxBSr9F4.png`}
			alt="Thumbnail"
			layout="responsive"
			width={1000}
			height={571}
			placeholder="blur"
			blurDataURL={process.env.NEXT_PUBLIC_BASE64}
			priority
		/>
	</header>
)

export default Header
