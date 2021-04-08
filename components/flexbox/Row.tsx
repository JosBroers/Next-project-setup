import React from "react"

// CSS
import styles from "../../styles/components/flexbox/row.module.scss"

export default function Row(props: { children: React.ReactNode }) {
  const { children } = props

  return <div className={styles.row}>{children}</div>
}
