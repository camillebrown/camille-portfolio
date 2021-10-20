import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const NavBarLogo = styled(LinkRouter)`
  cursor: pointer;
  text-decoration: none;
  color: #444443;
  font-family: 'Lato', serif;
  letter-spacing: 2px;
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
