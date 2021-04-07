import React from "react"

// CSS Imports
import styles from "../styles/components/container.module.scss"

export default function Container(props: {children: React.ReactNode}) {
	const {children} = props

	return <div className={styles.container}>{children}</div>
}
