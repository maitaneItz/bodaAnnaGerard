import styled from "styled-components";
import { isMobile } from "../../styles/media";

export const Wrapper = styled.div`
  position: relative;
  background-color: white;
  padding: 10px 10px 50px 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.35);
  transform: rotate(10deg);
  -ms-transform: rotate(10deg); /* IE9 */
  -webkit-transform: rotate(10deg); /* Safari y Chrome */
  -moz-transform: rotate(10deg);

  @media ${isMobile} {
    width: 90%;
    transform: rotate(5deg);
    -ms-transform: rotate(5deg); /* IE9 */
    -webkit-transform: rotate(5deg); /* Safari y Chrome */
    -moz-transform: rotate(5deg);
  }
`;

export const ChinchetaWrapper = styled.div`
  position: absolute;
  width: 40px;
  top: -10px;
  left: 50%;
  trnasform: translateX(-50%);
`;
