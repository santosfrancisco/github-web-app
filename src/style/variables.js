import { createGlobalStyle } from 'styled-components'
import { config } from 'react-awesome-styled-grid'

export default createGlobalStyle`
  :root {
    --site-font: 'Montserrat', sans-serif;
    --text-size: 16px;
  }
  ${config().media['md']`
    :root {
      --text-size: 18px;
    }
  `}
`
