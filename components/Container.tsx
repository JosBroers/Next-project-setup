import React from "react"

// CSS Imports
import styles from "../styles/components/container.module.scss"

interface ContainerProps {
	children: React.ReactNode
}

const Container = (Props: ContainerProps) => {
	const { children } = Props

	return <div className={styles.container}>{children}</div>
}

export default Container
