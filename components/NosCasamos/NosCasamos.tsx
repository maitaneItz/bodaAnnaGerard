import React from 'react'
import styled from 'styled-components'
import { FontSizeLarge, SpaceL, SpaceXxl } from '../../dictionary/variables'
import { Button } from '../Button'
export const NosCasamos = () => {
    return(
    <>
        <Title>¡Nos casamos!</Title>
        <Content>
            <TextWrapper>
            <Text>
                Duis leo. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Curabitur blandit mollis lacus. Praesent blandit laoreet nibh. In hac habitasse platea dictumst.
                Aliquam eu nunc. Cras non dolor. Aliquam lobortis. Ut varius tincidunt libero. Nulla consequat massa quis enim.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. 
            </Text>
            <Button>
                Confirmar
            </Button>
            </TextWrapper>
            <ImageWrapper>
            <img src="/images/NosCasamos.jpeg" alt="¡Nos casamos!" />
            </ImageWrapper>
        </Content>
    </>
    )
}

const Title = styled.p`
    font-size: ${FontSizeLarge};
    font-family: "Juana Alt";
    font-weight: 600;
`
const Content = styled.div`
    display: flex; 
`
const TextWrapper = styled.div`
    flex-basis: 50%;
    margin-right: ${SpaceL}
`
const Text = styled.p`
    margin-bottom:${SpaceL}
`
const ImageWrapper = styled.div`
    flex-basis: 45%;
    margin-top: ${SpaceXxl};
    & > img {
        width: 100%;
    }
`



