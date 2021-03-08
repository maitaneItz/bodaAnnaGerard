import styled from "styled-components";
import * as tokens from "../../dictionary/variables";
import { Container } from "../Container";

export const Wrapper = styled.div`
  height: 100%;
  padding: ${tokens.SpaceXxxl} 0;
  background: url("/images/casa.svg") no-repeat;
  background-position: center ${tokens.SpaceXxxl};

  ${Container} {
    height: 100%;
  }
`;

export const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ImageTop = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
`;

export const Date = styled.div`
  font-family: "Juana Alt";
  color: ${tokens.PrimaryColor};
  font-size: ${tokens.FontSizeLarge};
`;
