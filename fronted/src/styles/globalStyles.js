import { createGlobalStyle } from "styled-components";

const fmaGlobalStyles = createGlobalStyle`
  /* Garante que todo elemento use o box-sizing correto */
  html {
    box-sizing: border-box;
    background-color: black;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: black;
    font-family: 'Poppins', sans-serif;
    color: white;
    height: 100%;
    width: 100%;
    overflow: hidden; /* Impede qualquer scroll geral */
  }

  #root {
    height: 100%;
  }

  /* Zera margens padrão que podem causar espaços indesejados */
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;

export default fmaGlobalStyles;
