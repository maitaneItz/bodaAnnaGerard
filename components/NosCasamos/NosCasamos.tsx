import React from "react";
import { Button } from "../Button";
import { Title, Content, TextWrapper, Text, StyledPolaroid } from "./styles";

export const NosCasamos = () => {
  return (
    <>
      <Title>¡Nos casamos!</Title>
      <Content>
        <TextWrapper>
          <Text>
            Ni una pandemia mundial, varios meses de confinamiento, 3 olas, una
            posible cuarta, 2 aplazamientos de boda y mil restricciones más han
            podido con nosotros. Así que reserva el 22 de julio porque ...{" "}
            <strong>¡NOS VAMOS DE BODA!</strong>
          </Text>
          <Text>
            Sabemos que es una situación delicada y que puede afectar a tu
            decisión de participar. Nosotros tenemos muchas ganas de celebarlo y
            nos encantaría que nos acompañases en este día tan especial y por
            ello, intentaremos que sea lo más seguro posible para todos los
            invitados.
          </Text>
          <Text>
            Si decides venir será genial, pero si dudas no te preocupes,
            háznoslo saber y seguro que podemos celebrarlo contigo en otra
            ocasión.
          </Text>
          <Button>¡Me apunto!</Button>
        </TextWrapper>
        <StyledPolaroid
          image="/images/NosCasamos.jpeg"
          alt="¡Nos casamos!"
          tapePositions={["top"]}
        />
      </Content>
    </>
  );
};
