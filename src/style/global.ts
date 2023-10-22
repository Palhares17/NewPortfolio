import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.colorTitle};
  }

  h1, h2, h3, h4 {
    font-family: 'Lexend', sans-serif;
  }

  p, li, span, a {
    font-family: 'Ubuntu', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
