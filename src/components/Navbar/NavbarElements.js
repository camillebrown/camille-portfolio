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
    color: #df9c37;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;

    &.active{
        border-bottom:3px solid #df9c37;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #df9c37;
    /* white-space:nowrap; */
    padding: 10px 22px;
    margin-right: 24px;
    color: white;
    font-size:16px;
    /* border: none; */
    /* outline: none; */
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background: #85432e;
        color: white;
    }
`