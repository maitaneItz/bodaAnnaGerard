import { createGlobalStyle } from "styled-components";
import * as tokens from "../dictionary/variables";

export const GlobalStyles = createGlobalStyle`
  * {
    color: ${tokens.FontColor};
  }
`;
