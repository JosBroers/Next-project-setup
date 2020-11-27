import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  html,
  body {
    font-family: 'Inter', sans-serif;
    color: var(--color-black);
    font-size: 18px;
    line-height: 1.5rem;
    overflow-x: hidden;
    scroll-behavior: smooth;
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
