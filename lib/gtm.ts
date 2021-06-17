/* eslint-disable no-unused-vars */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM

declare global {
	interface Window {
		dataLayer: any
	}
}

export const Pageview = url => {
	window.dataLayer.push({
		event: "pageview",
		page: url,
	})
}
