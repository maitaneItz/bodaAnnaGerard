import { Container } from "../Container";
import { Wrapper, Date, InnerWrapper, Title } from "./styles";

export const Header = () => (
  <Wrapper>
    <Container>
      <InnerWrapper>
        <Title src="/images/name.svg" />
        <Date>22 Julio</Date>
      </InnerWrapper>
    </Container>
  </Wrapper>
);
