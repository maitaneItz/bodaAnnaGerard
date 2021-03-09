import styled from 'styled-components'
import { BaseColor, FontSizeMedium, PrimaryColor, SecondaryColor, SpaceS, SpaceXxl } from '../../dictionary/variables'

export const Button = styled.button`
    position: relative;
    font-family: "Juana Alt";
    font-weight: 400;
    font-size: ${FontSizeMedium};
    background-color: ${PrimaryColor};
    color: ${BaseColor};
    border-radius: 4px;
    padding: ${SpaceS} ${SpaceXxl};
    transition: all .5s ease;
    outline:none;


    &:hover{
        cursor: pointer;
        color: ${PrimaryColor};
        font-weight: 400;
        background-color: ${BaseColor};
        border: 2px solid  ${PrimaryColor};
        transition: all .5s ease;
    }

`
