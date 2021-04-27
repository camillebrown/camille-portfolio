import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#fff' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`

export const NavLinks = styled(LinkScroll)`
    color: rgb(68, 68, 67);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 3rem;
    height:100%;
    cursor: pointer;

    &.active{
        border-bottom:3px solid #df9c37;
    }

    &:hover{
        color: #df9c37;
        border-bottom:3px solid #df9c37;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    /* border-radius: 50px; */
    border: 1px solid rgb(165, 165, 165);
    background: white;
    font-size: small;
    letter-spacing: 1.5px;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    padding: 10px 22px;
    margin-right: 24px;
    color: rgb(68, 68, 67);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background: rgb(68, 68, 67);
        color: white;
    }
`