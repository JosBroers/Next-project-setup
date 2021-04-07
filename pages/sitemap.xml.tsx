import React from "react"
import {SitemapStream, streamToPromise} from "sitemap"
import {createGzip} from "zlib"
import {GetServerSideProps} from "next"

// API Imports
// import {request} from "@lib/api"
// import QUERY_SITEMAP from "@queries/pages/sitemap.graphql"

const Sitemap = () => <div>This should not be navigated to.</div>
export default Sitemap

let sitemap = null

const addUrls = async(smStream: SitemapStream) => {
	// const req = await request({
	// 	query: QUERY_SITEMAP,
	// 	variables: {},
	// })

	smStream.write({
		url: "",
		changefreq: "weekly",
		lastmod: new Date(),
		priority: 1,
	})

	// req.allSEOPages.map(({slug, updatedAt}) => {
	// 	smStream.write({
	// 		url: slug,
	// 		changefreq: "weekly",
	// 		lastmod: updatedAt,
	// 		priority: 0.8,
	// 	})
	// })
}

export const getServerSideProps: GetServerSideProps = async({res, req}) => {
	if(!req || !res) {
		return {
			props: {},
		}
	}

	res.setHeader("Content-Type", "application/xml")
	res.setHeader("Content-Encoding", "gzip")

	// Check for cache first
	if(sitemap) {
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

		// cache the result
		sitemap = resp

		res.write(resp)
		res.end()
	} catch(err) {
		console.log(err)
		res.statusCode = 500
		res.write("Sitemap could not be generated")
		res.end()
	}

	return {
		props: {},
	}
}
