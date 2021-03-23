import { Container } from "../Container";
import { Polaroid } from "../Polaroid";
import { Wrapper } from "./styles";

export const Collage = () => (
  <Container>
    <Wrapper>
      <Polaroid image="/images/AnnaGerard1.jpeg" alt="" />
      <Polaroid image="/images/AnnaGerard2.jpeg" alt="" />
    </Wrapper>
  </Container>
);
