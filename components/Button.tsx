import React from "react"
import Link from "next/link"

// CSS imports
import styles from "../styles/components/button.module.scss"

interface ButtonProps {
	link?: string
	title: string
	type?: "internal" | "external" | "action"
	onClick?: any
	style?: "primary" | "secondary"
}

const ButtonInternal = Props => {
	const { link, title } = Props
	const style = Props.style ? `button--${Props.style}` : "button--primary"

	return (
		<Link href={link}>
			<a className={`${styles.button} ${styles[style]}`} title={title}>
				{title}
			</a>
		</Link>
	)
}

const ButtonExternal = Props => {
	const { link, title } = Props
	const style = Props.style ? `button--${Props.style}` : "button--primary"

	return (
		<a
			href={link}
			target="__blank"
			rel="noreferrer"
			title={title}
			className={`${styles.button} ${styles[style]}`}
		>
			{title}
		</a>
	)
}

const ButtonAction = Props => {
	const { title, onClick } = Props
	const style = Props.style ? `button--${Props.style}` : "button--primary"

	return (
		<button className={`${styles.button} ${styles[style]}`} onClick={onClick}>
			{title}
		</button>
	)
}

const Button = (Props: ButtonProps) => {
	const type = Props.type ? Props.type : "internal"
	let button

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
