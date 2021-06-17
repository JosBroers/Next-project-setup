import React from "react"
import Link from "next/link"
import styles from "../styles/components/button.module.scss"

interface ButtonProps {
	link?: string
	title?: string
	type?: "internal" | "external" | "action"
	onClick?: any
	styling?: "primary" | "secondary" | "none"
	icon?: React.ReactNode
}

const ButtonInternal = Props => {
	const { link, title, icon, styling } = Props

	const style = styling ? `button--${styling}` : "button--primary"

	return (
		<Link href={link}>
			<a className={`${styles.button} ${styles[style]}`} title={title}>
				{icon || title}
			</a>
		</Link>
	)
}

const ButtonExternal = Props => {
	const { link, title, icon, styling } = Props
	const style = styling ? `button--${styling}` : "button--primary"

	return (
		<a
			href={link}
			target="__blank"
			rel="noreferrer"
			title={title}
			className={`${styles.button} ${styles[style]}`}
		>
			{icon || title}
		</a>
	)
}

const ButtonAction = Props => {
	const { title, onClick, icon, styling } = Props

	const style = styling ? `button--${styling}` : "button--primary"

	return (
		<button className={`${styles.button} ${styles[style]}`} onClick={onClick} type="button">
			{icon || title}
		</button>
	)
}

const Button = (Props: ButtonProps) => {
	const { type } = Props

	const buttonType = type || "internal"
	let button

	if (buttonType === "internal") {
		button = <ButtonInternal {...Props} />
	} else if (type === "external") {
		button = <ButtonExternal {...Props} />
	} else {
		button = <ButtonAction {...Props} />
	}

	return <>{button}</>
}

export default Button
