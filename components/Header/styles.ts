import styled from "styled-components";
import * as tokens from "../../dictionary/variables";
import { isMobile, isTablet } from "../../styles/media";
import { Container } from "../Container";

export const Wrapper = styled.div`
  height: 100vh;
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

  @media ${isMobile} {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ImageTop = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;

  @media ${isMobile} {
    width: 60%;
  }
`;

export const Title = styled.img`
  display: inline-block;
  max-width: 100%;

  @media ${isMobile} {
    max-width: 90%;
    margin-bottom: ${tokens.SpaceXxl};
  }

  @media ${isTablet} {
    max-width: 45%;
  }
`;

export const Date = styled.div`
  color: ${tokens.PrimaryColor};
  font-family: "Juana Alt";
  font-weight: 200;
  font-size: 60px;
`;
