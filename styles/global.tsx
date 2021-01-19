import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  html,
  body {
    color: var(--color-black);
    background-color: var(--color-white);
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    line-height: 1.5rem;
    overflow-x: hidden;
  }

  @supports (font-variation-settings: normal) {
    body {
      font-family: 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }
  }

  a,
  button {
    color: var(--color-black);
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }

  img,
  svg {
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
`

export default Global
