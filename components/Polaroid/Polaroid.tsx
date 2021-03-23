import { Wrapper, ChinchetaWrapper } from "./styles";

interface Props {
  image: string;
  alt: string;
}

export const Polaroid = ({ image, alt }: Props) => (
  <Wrapper>
    <Chincheta />
    <img src={image} alt={alt} loading="lazy" />
  </Wrapper>
);

const Chincheta = () => {
  return (
    <ChinchetaWrapper>
      <img src="/images/chincheta.png" />
    </ChinchetaWrapper>
  );
};
