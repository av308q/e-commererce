import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'open Sans Condensed';
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
    padding: 10px;

  }



  background-color: black;
  color: wheat;
}

a {
  text-decoration: none;
  color:wheat;
}
;`;
