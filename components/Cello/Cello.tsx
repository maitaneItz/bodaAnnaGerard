import { Tape, variant } from "./styles";

interface Props {
  position: keyof typeof variant;
}

export const Cello = ({ position }: Props) => <Tape position={position} />;
