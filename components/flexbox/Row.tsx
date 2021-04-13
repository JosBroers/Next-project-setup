import React from "react"

interface RowProps {
	children: React.ReactNode
	direction?: "row" | "row-reverse" | "column" | "column-reverse"
	wrap?: "nowrap" | "wrap" | "wrap-reverse"
	justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
	alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"
	alignContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch"
}

const Row = (Props: RowProps) => {
	const { children, direction, wrap, justify, alignItems, alignContent } = Props
	const flexDirection = direction || "row"
	const flexWrap = wrap || "nowrap"
	const justifyContent = justify || "flex-start"
	const alignI = alignItems || "flex-start"
	const alignC = alignContent || "flex-start"

	return (
		<>
			<div className="flexbox-row">{children}</div>
			<style jsx>{`
				.flexbox-row {
					display: flex;
					flex-direction: ${flexDirection};
					flex-wrap: ${flexWrap};
					justify-content: ${justifyContent};
					align-items: ${alignI};
					align-content: ${alignC};
				}
			`}</style>
		</>
	)
}

export default Row
