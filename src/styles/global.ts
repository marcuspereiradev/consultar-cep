import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }
  body {
    background: #f4f4f4;
    color: #212844;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-size: 1em;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
