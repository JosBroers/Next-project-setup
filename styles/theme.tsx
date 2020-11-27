import { createGlobalStyle } from "styled-components"

const Theme = createGlobalStyle`
  :root {
    --color-black: #000;
    --color-white: #fff;
  }

  ::-moz-selection {
    color: var(--color-white);
    background: var(--color-white);
  }

  ::selection {
    color: var(--color-white);
    background: var(--color-black);
  }

  ::placeholder {
  color: var(--color-black);
  opacity: 1;
}
`

export default Theme
