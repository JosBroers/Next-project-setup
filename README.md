# Next project setup

## Prerequisites

Install the Node version listed in `.nvmrc` (use a Node version manager such as [NVM for Mac](https://github.com/nvm-sh/nvm) or [NVM for Windows](https://github.com/coreybutler/nvm-windows))

## Scripts

- Use `yarn` or `yarn install` to install the dependencies
- Use `yarn dev`, `next` or `next dev` to start a local dev server at [http://localhost:3000](http://localhost:3000)
- To build the application for production, use `yarn build` or `next build`
- To start a production server, use `yarn start` or `next start`
- To export application as static HTML, use `next build && next export`

## Vercel CLI

- To install Vercel CLI use `npm install -g vercel`
- To connect a project use `vercel link` and configure credentials accordingly
- Use `vercel env pull` to get the environment variables
- Use `vercel dev` to deploy a local test server at [http://localhost:3000](http://localhost:3000)
- Use `vercel` to deploy a preview build
- Use `vercel --prod` to deploy a production build
