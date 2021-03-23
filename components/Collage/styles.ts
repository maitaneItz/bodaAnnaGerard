import styled from "styled-components";
import * as tokens from "../../dictionary/variables";

export const Wrapper = styled.div`
  padding-bottom: ${tokens.SpaceXxxl};
  display: flex;
  justify-content: center;
  align-items: flex-start;

  > :first-child {
    width: 350px;
    transform: rotate(0deg);
  }

  > :last-child {
    width: 400px;
  }
`;
