import React from "react"

interface CookieProps {
	children: React.ReactNode
}

const CookieWrap = (Props: CookieProps) => {
	const { children } = Props
	return <div className="cookie-wrap">{children}</div>
}

export default CookieWrap
