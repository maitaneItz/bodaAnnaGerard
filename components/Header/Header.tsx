import { Container } from "../Container";
import { Wrapper, ImageTop, Date, InnerWrapper } from "./styles";

export const Header = () => (
  <Wrapper>
    <Container>
      <ImageTop src="/images/hojasHeader.svg" />
      <InnerWrapper>
        <img src="/images/name.svg" />
        <Date>22 Julio</Date>
      </InnerWrapper>
    </Container>
  </Wrapper>
);
