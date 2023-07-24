'use client'
// ========= Global Style
// import all packages
import { createGlobalStyle } from 'styled-components'
import { Colors } from '@/themes'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    background-color: ${Colors.white};
    font-family: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.4rem;
  }

  h6 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }

  @media screen and (max-width: 920px) {
    html {
      font-size: 13px;
    }
  }
`

export default GlobalStyle
