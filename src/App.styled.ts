import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  color: #414141;
}
body {
  margin: 0;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`
export default GlobalStyle
