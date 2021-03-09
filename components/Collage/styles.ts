import styled from "styled-components";
import * as tokens from "../../dictionary/variables";
import { isMobile, isTablet } from "../../styles/media";

export const Wrapper = styled.div`
  padding-bottom: ${tokens.SpaceXxxl};
  display: flex;
`;

export const Left = styled.div`
  width: 440px;
  height: 485px;
  line-height: 0;
  flex-grow: 0;
  margin-right: ${tokens.SpaceL};
  margin-bottom: 200px;
  background: url("/images/AnnaGerard1.jpeg") no-repeat;
  background-position: center bottom;
  background-size: cover;

  @media ${isTablet} {
    width: 320px;
    height: 345px;
    margin-bottom: ${tokens.SpaceHero};
  }

  @media ${isMobile} {
    width: 200px;
    height: 220px;
    margin-right: -${tokens.SpaceL};
    margin-bottom: ${tokens.SpaceXxxl};
  }
`;

export const Right = styled.div`
  align-self: flex-end;
  height: 503px;
  width: 635px;
  flex-grow: 0;
  background: url("/images/AnnaGerard2.jpeg") no-repeat;
  background-position: center;
  background-size: contain;

  @media ${isTablet} {
    height: 400px;
    width: 515px;
  }

  @media ${isMobile} {
    height: 300px;
    width: 320px;
  }
`;
