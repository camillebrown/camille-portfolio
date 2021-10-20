import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const MainContainer = styled.div`
  z-index: 1;
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 768px) {
    width: 100%;
    background: #ebe9e6;
    margin: 30% 0%;
  }

  @media screen and (max-width: 1024px) {
    height: 80vh;
  }

  @media screen and (max-width: 375px) {
    height: 110vh;
  }
`;

export const ProjectBg1 = styled.div`
  background: #ebe9e6;
`;

export const MainImg = styled.img`
  height: 75vh;
  object-fit: contain;
  float: right;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const IndexProjectContainer = styled.div`
  z-index: 3;
  position: absolute;
  
  @media screen and (max-width: 1024px) {
    z-index: 1;
    background: transparent;
    padding: 30px 0px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 35% 0%;
    background: #ebe9e6;
  }
`;

export const IndexProjectSubtitle = styled.h1`
  color: #444443;
  font-family: 'Lora', serif;
  letter-spacing: 1.5px;

  @media screen and (max-width: 375px) {
    max-width: 75%;
  }
`;

export const PageTitle = styled.h2`
  color: #df9c37;
  font-family: 'Lato', serif;
  letter-spacing: 2px;
`;

export const PageHeader = styled.h2`
  line-height: 1.2;
  color: #444443;
  font-family: 'Lora', serif;
  letter-spacing: 1.5px;
`;

export const ProjectTitle = styled.p`
  font-family: 'Lato', serif;
  letter-spacing: 2px;
  color: #df9c37;
`;

export const ProjectSubtitle = styled.p`
  font-family: 'Lora', serif;
  letter-spacing: 1px;
  color: #444443;
`;

export const ProjectLinks = styled.a`
  letter-spacing: 1.5px;
  font-size: 0.85em;
  font-family: 'Lato', sans-serif;
  color: #444443;
  cursor: pointer;

  &:hover {
    background: #ebe9e5;
  }
`;

export const ProjectCard = styled(LinkRouter)`
  background: white;
  border-radius: 10px;
  min-height: 30vh;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    min-width: 70%;
    max-width: 70%;
    height: 20px;
  }

  @media screen and (max-width: 375px) {
    min-width: 70%;
    max-width: 90%;
    height: 20px;
  }
`;

export const ProjectIcon1 = styled.img`
  width: 45%;
  height: auto;

  @media screen and(max-width: 768px) {
    width: 65%;
    height: auto;
  }
`;

export const ProjectIcon2 = styled.img`
  width: 35%;
  height: auto;

  @media screen and(max-width: 768px) {
    background: #ebe9e6;
  }
`;

export const ProjectIcon3 = styled.img`
  width: 50%;
  height: auto;

  @media screen and(max-width: 768px) {
    background: #ebe9e6;
  }
`;
