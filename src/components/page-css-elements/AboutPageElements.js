import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const AboutBtnLink = styled(LinkRouter)`
  border: 1px solid #a5a5a5;
  background: white;
  letter-spacing: 1.5px;
  font-family: 'Lato', sans - serif;
  text-transform: uppercase;
  color: #444443;
  cursor: pointer;
  transition: all 0.2s ease -in -out;
  text-decoration: none;

  &:hover{
    background: #444443;
    color: #df9c37;
    font-weight: 600;
  }
`;