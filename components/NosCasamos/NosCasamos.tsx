import { relative } from 'node:path'
import React from 'react'
import styled from 'styled-components'
import { FontSizeLarge, SpaceL, SpaceM, SpaceS, SpaceXl, SpaceXs, SpaceXxl, SpaceXxxl } from '../../dictionary/variables'
import { isMobile } from '../../styles/media'
import { Button } from '../Button'
export const NosCasamos = () => {
    return(
    <>
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
            <img src="/images/NosCasamos.jpeg" alt="¡Nos casamos!" loading="lazy" />
            </ImageWrapper>
        </Content>
    </>
    )
}

const Title = styled.p`
    font-size: ${FontSizeLarge};
    font-family: "Juana Alt";
    font-weight: 600;
    @media ${isMobile}{
        text-align: center;
    }
`
const Content = styled.div`
    display: grid;
    grid-template-columns: 50% 45%;
    grid-template-rows: 1fr;
    grid-template-areas: "Text Image";
    column-gap: ${SpaceL};
    row-gap: ${SpaceXl};
    @media ${isMobile}{
        grid-template-areas: "Image" 
                              "Text" ;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        row-gap: ${SpaceXs};
    }
    align-items: center;
    padding-bottom: ${SpaceXxxl};
`
const TextWrapper = styled.div`
    grid-area: Text;
    display: block; 
    position: relative;
    @media ${isMobile}{
        text-align: center;
    }
`
const Text = styled.p`
    margin-bottom:${SpaceL};
    & > strong {
        white-space: pre;
    }
`


const ImageWrapper = styled.div`
grid-area: Image;

    & > img {
        width: 100%;
    }
`



