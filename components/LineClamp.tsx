import React from "react"

// CSS Imports
import styles from "../styles/components/line-clamp.module.scss"

interface LineClampProps {
	children: React.ReactNode
  component: string
  amount: number
}

const LineClamp = (Props: LineClampProps) => {
  const { children, amount } = Props
  const cssClass = `line-clamp--${amount}`

	return (
      <Props.component className={`${styles["line-clamp"]} ${styles.[cssClass]}`}>
        {children}
      </Props.component>
  )
}

export default LineClamp