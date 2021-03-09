import { createGlobalStyle } from "styled-components";
import * as tokens from "../dictionary/variables";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Tahoma";
    src: url("/fonts/Tahoma.ttf");
    font-weight: 400;
  }
  
  @font-face {
    font-family: "Juana Alt";
    src: url("/fonts/Juana Alt Regular.ttf");
    font-weight: 400;
  }
  @font-face {
    font-family: "Juana Alt";
    src: url("/fonts/Juana Alt Bold.ttf");
    font-weight: 600;
  }
  @font-face {
    font-family: "Juana Alt";
    src: url("/fonts/Juana Alt Light.ttf");
    font-weight: 200;
  } 
  
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto-Light.ttf");;
    font-weight: 200;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;

    font-family: "Roboto", sans-serif;
    background-color: ${tokens.BaseColor};
    color: ${tokens.FontColor};
    font-size: ${tokens.FontSizeBase};
    line-height: 27px;
  }
`;
