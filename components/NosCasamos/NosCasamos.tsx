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
            <Chincheta />
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
    grid-template-columns: 50% 40%;
    grid-template-rows: 1fr;
    grid-template-areas: "Text Image";
    column-gap: 80px;
    row-gap: ${SpaceXl};
    @media ${isMobile}{
        grid-template-areas: "Image" 
                              "Text" ;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        row-gap: ${SpaceL};
        justify-items: center;
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
    position: relative;
    grid-area: Image;
    background-color:white;
    padding:10px 10px 50px 10px;
    box-shadow:10px 10px 30px rgba(0, 0, 0, 0.35);
    transform:rotate(10deg);
    -ms-transform:rotate(10deg); /* IE9 */
    -webkit-transform:rotate(10deg); /* Safari y Chrome */
    -moz-transform:rotate(10deg); 

    @media ${isMobile}{
        width: 90%;
        transform:rotate(5deg);
        -ms-transform:rotate(5deg); /* IE9 */
        -webkit-transform:rotate(5deg); /* Safari y Chrome */
        -moz-transform:rotate(5deg); 
    }

    & > img {
        width: 100%;
    }

`

const Chincheta = () => {
    return (
        <ChinchetaWrapper>
            <img src="/images/chincheta.png" />
        </ChinchetaWrapper>
    )
}

const ChinchetaWrapper = styled.div`
    position: absolute;
    top: -10px;
    left: 41%;
    & > img {
        width: 20%;
    }
`


