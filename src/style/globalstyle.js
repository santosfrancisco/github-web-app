import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    font-size: var(--text-size);
    font-family: var(--site-font);
    min-width: 300px;
  }
  body {
    height: 100%;
    max-width: 100%;
    position: relative;
    overflow-x: hidden;
  }
  h1 {
    font-size: 2em;
    margin: .67em 0
  }
  h2 {
    font-size: 1.5em;
    margin: .75em 0
  }
  h3 {
    font-size: 1.17em;
    margin: .83em 0
  }
  h4 {
    margin: 1.12em 0
  }
  h5 {
    font-size: .83em;
    margin: 1.5em 0
  }
  h6 {
    font-size: .75em;
    margin: 1.67em 0
  }
  input {
    font-family: inherit;
    font-size: inherit;
  }
  strong {
    font-weight: bold;
  }
`
