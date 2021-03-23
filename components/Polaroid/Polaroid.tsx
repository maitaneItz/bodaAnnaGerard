import { Position } from "../Cello";
import { Cello } from "../Cello/Cello";
import { Wrapper } from "./styles";

interface Props {
  image: string;
  alt: string;
  tapePositions?: Position[];
}

export const Polaroid = ({ image, alt, tapePositions }: Props) => (
  <Wrapper>
    {tapePositions?.map((position) => (
      <Cello position={position} />
    ))}
    <img src={image} alt={alt} loading="lazy" />
  </Wrapper>
);
