import React from "react"

// CSS
import styles from "../../styles/components/flexbox/col.module.scss"

export default function Col(props: { children: React.ReactNode }) {
	const { children } = props

	return <div className={styles.col}>{children}</div>
}
