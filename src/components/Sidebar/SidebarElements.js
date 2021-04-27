import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #F2F0EB;
    display: grid;
    align-items: center;
    top:0;
    right:0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.5rem;
    text-decoration: none;
    font-weight: 600;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #444443;
    font-family: 'Lora', serif;
    letter-spacing: 1.5px;
    cursor: pointer;

    &:hover{
        color: #df9c37;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #df9c37;
    white-space: nowrap;
    padding: 16px 44px;
    color: white;
    font-size: '16px';
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.5px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #444443;
        color:#df9c37;
    }
`

