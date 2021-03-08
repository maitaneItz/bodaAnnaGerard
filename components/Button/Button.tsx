import styled from 'styled-components'
import { BaseColor, FontSizeMedium, PrimaryColor, SpaceS, SpaceXxl } from '../../dictionary/variables'

export const Button = styled.button`
    font-family: "Juana Alt";
    font-weight: 400;
    font-size: ${FontSizeMedium};
    background-color: ${PrimaryColor};
    color: ${BaseColor};
    border-radius: 4px;
    padding: ${SpaceS} ${SpaceXxl}

`
