import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Button1 = styled(LinkScroll)`
    border-radius: 50px;
    background: #df9c37;
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: white;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    font-weight:700;
    cursor: pointer;
    display: flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.5px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #444443;
    }
`

export const Button2 = styled(LinkRouter)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#85432e' : '#df9c37')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#df9c37' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    font-weight:700;
    cursor: pointer;
    display: flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' :'#85432e')};
    }
`