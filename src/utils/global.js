import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, button, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
  }

  div {
    text-align: center;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }
`;
