import { Container } from "../Container";
import { Wrapper, ImageTop, Date, InnerWrapper, Title } from "./styles";

export const Header = () => (
  <Wrapper>
    <Container>
      <ImageTop src="/images/hojasHeader.svg" />
      <InnerWrapper>
        <Title src="/images/name.svg" />
        <Date>22 Julio</Date>
      </InnerWrapper>
    </Container>
  </Wrapper>
);
