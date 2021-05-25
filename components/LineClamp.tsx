import React from "react"

/* CSS imports */
import styles from "../styles/components/line-clamp.module.scss"

interface LineClampProps {
	children: React.ReactNode
	amount: number
}

const LineClamp = (Props: LineClampProps) => {
	const { children, amount } = Props

	/* Define amount of lines */
	const clampAmount = amount ? amount : 1
	const cssClass = `line-clamp--${clampAmount}`

	return <div className={`${styles["line-clamp"]} ${styles[cssClass]}`}>{children}</div>
}

export default LineClamp
