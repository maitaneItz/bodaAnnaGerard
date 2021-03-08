import { createGlobalStyle } from "styled-components";
import * as tokens from "../dictionary/variables";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Tahoma";
    src: url("../dictionary/assets/fonts/Tahoma.ttf");
    font-weight: 400;
  }
  
  @font-face {
    font-family: "Juana Alt";
    src: url("../dictionary/assets/fonts/Juana Alt Regular.ttf");
    font-weight: 400;
  }
  @font-face {
    font-family: "Juana Alt";
    src: url("../dictionary/assets/fonts/Juana Alt Bold.ttf");
    font-weight: 600;
  }
  @font-face {
    font-family: "Juana Alt";
    src: url("../dictionary/assets/fonts/Juana Alt Light.ttf");
    font-weight: 200;
  }

  * {
    box-sizing: border-box;
    
    font-family: "Tahoma", sans-serif;
    color: ${tokens.FontColor};
  }
`;