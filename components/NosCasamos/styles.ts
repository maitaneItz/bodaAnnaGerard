import styled from "styled-components";
import {
  FontSizeLarge,
  SpaceL,
  SpaceXl,
  SpaceXxxl,
} from "../../dictionary/variables";
import { isMobile } from "../../styles/media";
import { Polaroid } from "../Polaroid";

export const Title = styled.p`
  font-size: ${FontSizeLarge};
  font-family: "Juana Alt";
  font-weight: 600;
  @media ${isMobile} {
    text-align: center;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 40%;
  grid-template-rows: 1fr;
  grid-template-areas: "Text Image";
  column-gap: 80px;
  row-gap: ${SpaceXl};
  @media ${isMobile} {
    grid-template-areas:
      "Image"
      "Text";
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    row-gap: ${SpaceL};
    justify-items: center;
  }
  align-items: center;
  padding-bottom: ${SpaceXxxl};
`;
export const TextWrapper = styled.div`
  grid-area: Text;
  display: block;
  position: relative;
  @media ${isMobile} {
    text-align: center;
  }
`;
export const Text = styled.p`
  margin-bottom: ${SpaceL};
  & > strong {
    white-space: pre;
  }
`;

export const StyledPolaroid = styled(Polaroid)`
  grid-area: Image;
`;
