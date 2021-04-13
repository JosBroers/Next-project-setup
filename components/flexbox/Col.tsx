import React from "react"

interface ColProps {
	children: React.ReactNode
}

const Col = (Props: ColProps) => {
	const { children } = Props

	return <div className="col">{children}</div>
}

export default Col
