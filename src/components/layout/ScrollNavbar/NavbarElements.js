import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#fff' : 'transparent')};
  height: 80px;
  margin-top: -190px;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavContainer = styled.div`
  height: 80px;
  z-index: 1;
  width: 100%;
`;

export const NavBarLogo = styled(LinkRouter)`
  cursor: pointer;
  text-decoration: none;
  color: #444443;
  font-family: 'Lato', serif;
  letter-spacing: 2px;
  margin: 15px 25px;

  @media screen and (max-width: 1024px) {
    margin: 25px;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    margin-top: 15px;
    margin-left: 10px;
  }
`;

export const Hamburger = styled.button`
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    margin-top: -20px;
    margin-right: -15px;
  }
`;

export const NavBarMenu = styled.ul`
  list-style: none;

  @media screen and (max-width: 1023px) {
    display: none !important;
  }
`;

export const NavLinks = styled(LinkScroll)`
  color: #444443;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  height: 80px;
  letter-spacing: 1.5px;
  font-family: 'Lato', sans-serif;
  font-weight: 300;

  &.active {
    border-bottom: 3px solid #df9c37;
  }

  &:hover {
    color: #df9c37;
    font-weight: 900;
    border-bottom: 3px solid #df9c37;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border: 1px solid #a5a5a5;
  background: white;
  letter-spacing: 1.5px;
  font-family: 'Lato', sans-serif;
  color: #444443;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #444443;
    color: white;
  }

  @media screen and (max-width: 1023px) {
    display: none !important;
  }
`;
