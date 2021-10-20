import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const NavLinks = styled(LinkRouter)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  cursor: pointer;
  color: #444443;
  text-decoration: none;
  font-size: small;
  letter-spacing: 1.5px;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-weight: 300;

  &:hover {
    color: #df9c37;
    padding-bottom: 10px;
    border-bottom: 3px solid #df9c37;
  }
`;
