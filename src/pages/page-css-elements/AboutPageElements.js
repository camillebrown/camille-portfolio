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

  &:hover {
    background: #444443;
    color: #df9c37;
    font-weight: 600;
  }
`;

export const Buttons = styled.div`
  width: 60%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media only screen and (device-width: 414px) {
    margin: 0 auto;
  }
`;

export const MainContainer = styled.div`
  z-index: 1;
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 1024px) {
    height: 83vh;
  }

  @media screen and (max-width: 768px) {
    height: 130vh;
    width: 100%;
  }

  @media only screen and (device-width: 414px) {
    height: 150vh;
  }
  @media only screen and (device-width: 390px){
    height: 155vh;
  }
  @media only screen and (device-width: 375px){
    height: 165vh;
  }
`;
