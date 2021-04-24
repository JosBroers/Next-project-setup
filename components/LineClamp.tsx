import React from "react"

// CSS Imports
import styles from "../styles/components/line-clamp.module.scss"

interface LineClampProps {
	children: React.ReactNode
	Component: string
	amount: number
}

const LineClamp = (Props: LineClampProps) => {
	const { children, amount } = Props
	const cssClass = `line-clamp--${amount}`

	return (
		<Props.Component className={`${styles["line-clamp"]} ${styles[cssClass]}`}>
			{children}
		</Props.Component>
	)
}

export default LineClamp
