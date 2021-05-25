import React from "react"
import { SitemapStream, streamToPromise } from "sitemap"
import { createGzip } from "zlib"
import { GetServerSideProps } from "next"

const Sitemap = () => <div>This should not be navigated to.</div>
export default Sitemap

let sitemap = null

/* Add URLS */
const addUrls = async (smStream: SitemapStream) => {
	const lastMod = new Date("2021-05-25")

	smStream.write({
		url: "",
		changefreq: "weekly",
		lastmod: lastMod,
		priority: 1,
	})
	smStream.write({
		url: "/cookies",
		changefreq: "weekly",
		lastmod: lastMod,
		priority: 0.8,
	})
}

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
	if (!req || !res) {
		return {
			props: {},
		}
	}

	res.setHeader("Content-Type", "application/xml")
	res.setHeader("Content-Encoding", "gzip")

	// Check for cache first
	if (sitemap) {
		res.write(sitemap)
		res.end()
		return {
			props: {},
		}
	}

	const smStream = new SitemapStream({
		hostname: `https://${req.headers.host}/`,
	})
	const pipeline = smStream.pipe(createGzip())

	try {
		await addUrls(smStream)
		smStream.end()
		const resp = await streamToPromise(pipeline)

		/* Cache the result */
		sitemap = resp

		res.write(resp)
		res.end()
	} catch (err) {
		res.statusCode = 500
		res.write("Sitemap could not be generated")
		res.end()
	}

	return {
		props: {},
	}
}
