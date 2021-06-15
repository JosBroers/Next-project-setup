import React from "react"
import Head from "next/head"
import Link from "next/link"
import { Box } from "reflexbox/styled-components"
import Container from "../components/Container"
import { CookieBlock, CookieWrap } from "../components/cookies"
import thumbnail from "../public/images/thumbnail.png"

const data = {
	title: "Cookies | Next Project Setup",
	description:
		"We use different types of cookies for our website. On this page u can read about the cookies we use and what we use them for.",
	image: thumbnail,
}

const Cookies = () => {
	const { title, description, image } = data

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title} />
				<meta name="twitter:title" content={title} />
				<meta name="description" content={description} />
				<meta property="og:description" content={description} />
				<meta name="twitter:description" content={description} />
				<meta property="og:image" content={image} />
				<meta name="twitter:image" content={image} />
			</Head>
			<Container>
				<Box width={[1, null, null, null, 9 / 12]} margin="50px auto 0">
					<Box>
						<h1>Cookie Policy</h1>
						<p>
							We use different types of cookies for our website. We think it is important that you
							have control over your online privacy. That is why we are clear about which cookies we
							use and what we use them for.
						</p>
						<ol>
							<li>
								<Link href="#what-are-cookies">
									<a title="What are cookies?">What are cookies?</a>
								</Link>
							</li>
							<li>
								<Link href="#which-cookies-do-we-use">
									<a title="Which cookies do we use?">Which cookies do we use?</a>
								</Link>
							</li>
							<li>
								<Link href="#cookie-from-third-parties">
									<a title="Cookies from third parties">Cookies from third parties</a>
								</Link>
							</li>
							<li>
								<Link href="#block-and-delete-cookies">
									<a title="Block and delete cookies">Block and delete cookies</a>
								</Link>
							</li>
						</ol>
					</Box>
					<Box id="what-are-cookies">
						<h2>What are cookies?</h2>
						<p>
							Cookies are small text files that a website places on your computer, tablet or mobile
							phone when you visit the website. Information about your website visit is stored in
							these cookies. For example, cookies allow a website to recognize you on a subsequent
							visit. This is useful if you do not want to log in every time.
						</p>
					</Box>
					<Box id="which-cookies-do-we-use">
						<h2>Which cookies do we use?</h2>
						<p>
							We use functional and analytical cookies on this site. You do not have to give
							official permission for these cookies. Nevertheless, we would like to inform you which
							cookies we place and how you can delete them if necessary. The majority of the cookies
							will only be placed after you click the &quot;close&quot; button.
						</p>
						<h3>Functional cookies</h3>
						<p>
							We always place functional cookies because they are necessary for the website to work
							properly. These cookies have little impact on your privacy and are used anonymously.
							This way we can perform our online services.
						</p>
						<h4>Jobrodo</h4>
						<CookieWrap>
							<CookieBlock
								description="Used to store whether or not the cookie notification has been displayed."
								name="cookie-consent"
								domain="*.jobrodo.nl"
								expires="After 1 year"
							/>
						</CookieWrap>
						<h3>Analytical cookies</h3>
						<p>
							We use analytical cookies, among other things, to view visitor numbers, to see with
							which devices and browsers our website is visited and how visitors navigate through
							our site. With this information we can further optimize for you as a visitor. This
							data is set in such a way that your data is anonymized and not used for other
							purposes.
						</p>
						<h4>Google Analytics</h4>
						<CookieWrap>
							<CookieBlock
								description="This cookie is a unique and random number that is used to generate users. This calculates visitor, session, and campaign data for the website analytics reports."
								name="_ga"
								domain="jobrodo.nl"
								expires="After 2 years"
							/>
							<CookieBlock
								description="This cookie keeps track of how often a visitor visits the website and data about the first and most recent visit."
								name="_ga_#"
								domain="jobrodo.nl"
								expires="After 2 years"
							/>
						</CookieWrap>
					</Box>
					<Box id="cookie-from-third-parties">
						<h2>Cookies from third parties</h2>
						<p>
							Pixels are also placed on this website by third parties. These are, for example,
							advertisers and / or the social media companies, such as Facebook, LinkedIn,
							Instagram, YouTube and Google Analytics. This statement does not apply to websites of
							third parties that are connected to Jobrodo.nl by means of links. To gain insight into
							the way in which they handle your data, we would like to refer you to the privacy
							statement of the relevant website.
						</p>
					</Box>
					<Box id="block-and-delete-cookies">
						<h2>Block and delete cookies</h2>
						<p>
							You do not officially have to give permission for the cookies placed by Jobrodo. The
							cookies we use are only used to improve the experience for you as a visitor. All data
							is anonymized and not used for other purposes.
						</p>
						<h3>Delete cookies?</h3>
						<p>
							You can easily opt out of cookies by setting your internet browser in such a way that
							it does not store cookies. In addition, you can also easily delete all information
							that has been previously stored. For more information about how we handle your data
							and requests, we would like to refer you to our{" "}
							<Link href="/privacy-policy">
								<a title="Privacy policy">privacy policy</a>
							</Link>
							.
						</p>
					</Box>
				</Box>
			</Container>
		</>
	)
}

export default Cookies
