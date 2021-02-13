import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, button, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
  }

  div {
    text-align: center;
  }

  a {
    text-decoration: none !important;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black} !important;

    &:hover{
      color: ${({ theme }) => theme.colors.black} !important;
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul {
    list-style-type: none !important;
    padding-left: 0;
  }
`;
