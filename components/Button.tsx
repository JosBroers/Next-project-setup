import React from "react"
import Link from "next/link"

/* CSS Imports */
import styles from "../styles/components/button.module.scss"

interface ButtonProps {
	link?: string
	title?: string
	type?: "internal" | "external" | "action"
	onClick?: any
	style?: "primary" | "secondary" | "none"
	icon?: React.ReactNode
}

const ButtonInternal = Props => {
	const { link, title, icon } = Props

	/* Define style variant */
	const style = Props.style ? `button--${Props.style}` : "button--primary"

	return (
		<Link href={link}>
			<a className={`${styles.button} ${styles[style]}`} title={title}>
				{icon ? icon : title}
			</a>
		</Link>
	)
}

const ButtonExternal = Props => {
	const { link, title, icon } = Props

	/* Define style variant */
	const style = Props.style ? `button--${Props.style}` : "button--primary"

	return (
		<a
			href={link}
			target="__blank"
			rel="noreferrer"
			title={title}
			className={`${styles.button} ${styles[style]}`}
		>
			{icon ? icon : title}
		</a>
	)
}

const ButtonAction = Props => {
	const { title, onClick, icon } = Props

	/* Define style variant */
	const style = Props.style ? `button--${Props.style}` : "button--primary"

	return (
		<button className={`${styles.button} ${styles[style]}`} onClick={onClick}>
			{icon ? icon : title}
		</button>
	)
}

const Button = (Props: ButtonProps) => {
	const type = Props.type ? Props.type : "internal"
	let button

	/* Load defined component */
	if (type === "internal") {
		button = <ButtonInternal {...Props} />
	} else if (type === "external") {
		button = <ButtonExternal {...Props} />
	} else {
		button = <ButtonAction {...Props} />
	}

	return <>{button}</>
}

export default Button
