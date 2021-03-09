import React from 'react'
import styled from 'styled-components'
import { FontSizeLarge, SpaceL, SpaceXl, SpaceXxl } from '../../dictionary/variables'
import { Button } from '../Button'
import { Container } from '../Container'
export const NosCasamos = () => {
    return(
    <Container>
        <Title>¡Nos casamos!</Title>
        <Content>
            <TextWrapper>
            <Text>
                Ni una pandemia mundial, varios meses de confinamiento, 3 olas, una posible cuarta, 2 aplazamientos de boda y mil restricciones más
                han podido con nosotros. Así que reserva el 22 de julio porque ... <strong>¡NOS VAMOS DE BODA!</strong> 
                </Text>
                <Text>
                    Sabemos que es una situación delicada y que puede afectar a tu decisión de participar. 
                    Nosotros tenemos muchas ganas de celebarlo y nos encantaría que nos acompañases en este día tan especial y por ello, intentaremos que sea lo más seguro posible para todos los invitados.
                </Text>
                <Text>
                    Si decides venir será genial, pero si dudas no te preocupes, háznoslo saber y seguro que podemos celebrarlo contigo en otra ocasión.
                </Text>
            <Button>
                ¡Me apunto!
            </Button>
            </TextWrapper>
            <ImageWrapper>
            <img src="/images/NosCasamos.jpeg" alt="¡Nos casamos!" />
            </ImageWrapper>
        </Content>
    </Container>
    )
}

const Title = styled.p`
    font-size: ${FontSizeLarge};
    font-family: "Juana Alt";
    font-weight: 600;
`
const Content = styled.div`
    display: flex; 
    align-items: center; 
`
const TextWrapper = styled.div`
    flex-basis: 50%;
    margin-right: ${SpaceXxl}
`
const Text = styled.p`
    margin-bottom:${SpaceL}
`
const ImageWrapper = styled.div`
    flex-basis: 45%;
    & > img {
        width: 100%;
    }
`



