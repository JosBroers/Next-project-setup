import React from "react"
import styles from "../styles/components/container.module.scss"

export default function Container(props: { children: React.ReactNode }) {
  return <div className={styles.container}>{props.children}</div>
}
