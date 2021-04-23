import styled from  'styled-components'
import { Link as LinkScroll } from 'react-scroll'

const Button = styled(LinkScroll)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#85432e' : '#df9c37')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#df9c37' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    font-weight:400;
    cursor: pointer;
    display: flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' :'#01bf71')};
    }
`

export default Button