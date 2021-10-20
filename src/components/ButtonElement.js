import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Button1 = styled(LinkScroll)`
  border-radius: 50px;
  background: #df9c37;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: white;
  font-size: '16px';
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #444443;
    color: #df9c37;
  }

  @media screen and (max-width: 375px) {
    transform: scale(0.7);
  }
`;

export const Button2 = styled(LinkRouter)`
  border-radius: 50px;
  background: #df9c37;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: white;
  font-size: '16px';
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #444443;
    color: #df9c37;
  }
`;
