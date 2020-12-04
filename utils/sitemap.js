const fs = require("fs")
const globby = require("globby")

async function generateSitemap() {
  const pages = await globby(["pages/**/*.tsx", "!pages/_*.tsx", "!pages/api"])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemap.org/schemas.sitemap/0.9">
      ${pages
        .map(page => {
          const path = page.replace("pages", "").replace(".tsx", "")
          const route = path === "index" ? "" : path

          if (route === "/") {
            return `
              <url>
                <loc>${`https://next-project-setup.vercel.app/${route}`}</loc>
              </url>
            `
          } else {
            return `
              <url>
                <loc>${`https://next-project-setup.vercel.app/${route}`}</loc>
              </url>
            `
          }
        })
        .join("")}
    </urlset>
  `

  fs.writeFileSync("public/sitemap.xml", sitemap)
}

generateSitemap()
