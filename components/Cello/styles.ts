import styled, { css } from "styled-components";

export const Tape = styled.div`
  position: absolute;
  height: 30px;
  width: 100px;
  background: rgba(255, 255, 235, 0.6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  ${({ position }) => variant[position]};
`;

export const variant = {
  top: css`
    top: -5px;
    left: 50%;
    transform: translate(-50%, -10px) rotate(-5deg);
  `,
  leftMiddle: css`
    top: 50%;
    transform: rotate(93deg) translateY(50px);
  `,
  rightMiddle: css`
    right: -45px;
    top: 50%;
    transform: rotate(89deg);
  `,
  leftTop: css`
    left: -20px;
    top: 0;
    transform: rotate(-35deg);
  `,
  rightTop: css`
    right: -20px;
    top: 10px;
    transform: rotate(45deg);
  `,
  rightBottom: css`
    bottom: 10px;
    right: -20px;
    transform: rotate(-35deg);
  `,
  leftBottom: css`
    bottom: 10px;
    left: -20px;
    transform: rotate(30deg);
  `,
};
