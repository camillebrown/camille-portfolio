import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.nav`
  min-height: 10vh;
  border-bottom: 1px solid #ffdead;

  @media screen and (max-width: 1024px) {
    min-height: 5vh;
  }
`;

export const Hamburger = styled.button`
  background: white;
  @media screen and (max-width: 1024px) {
    margin-right: 15px;
  }
  @media screen and (max-width: 768px) {
    margin-right: 15px;
  }
`;

export const NavBarLogo = styled(LinkRouter)`
  cursor: pointer;
  text-decoration: none;
  color: #444443;
  font-family: 'Lato', serif;
  letter-spacing: 2px;
  margin: 0vh 2vw;

  @media screen and (max-width: 1024px) {
    margin: 0vh 5vw;
  }

  @media screen and (max-width: 768px) {
    margin: 5vw;
  }
`;

export const NavLinks = styled(LinkRouter)`
  cursor: pointer;
  font-weight: 300;
  color: #444443;
  letter-spacing: 1.5px;
  font-family: 'Lato', sans-serif;

  &:hover {
    color: #df9c37 !important;
    font-weight: 400;
    text-decoration: none;
    padding-bottom: 8px;
    border-bottom: 3px solid #444443;
  }
`;
