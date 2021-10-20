import styled from 'styled-components';

export const HeroContainer = styled.div`
  z-index: 1;
  font-family: 'Montserrat', sans - serif;
`;

export const HeroBackground = styled.div`
  height: 110vh;
  width: 100%;

  @media screen and (max-width: 375px) {
    height: 80vh;
    width: 100%;
  }
`;

export const HeroBlock1 = styled.div`
  background-color: #ebe9e6;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 51%;
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    height: 65%;
    width: 100%;
  }
`;

export const HeroBlock2 = styled.div`
  background-color: #f2f0ec;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 52.5%;
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    height: 45%;
    width: 100%;
  }
`;

export const HeroImg1 = styled.img`
  position: absolute;
  width: 45%;
  top: 25%;
  left: 15%;

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 30%;
    top: 37%;
    left: 10%;
  }

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const HeroImg2 = styled.img`
  position: absolute;
  width: 15%;
  bottom: 10%;
  right: -2%;
  overflow: hidden;
`;

export const HeroImg3 = styled.img`
  position: absolute;
  width: 40%;
  bottom: 10%;
  right: 20%;

  @media screen and (max-width: 1024px) {
    position: absolute;
    width: 30%;
    bottom: 10%;
    right: 10%;
  }

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  max-width: 90%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    margin-top: 50%;
  }
`;

export const HeroTitle = styled.h1`
  color: #5c5c5c;
  font-family: 'Lato', serif;
  letter-spacing: 2px;
`;

export const HeroSubtitle = styled.h1`
  max-width: 55%;
  color: #444443;
  font-family: 'Lora', serif;
  letter-spacing: 1.5px;

  @media screen and (max-width: 375px) {
    max-width: 75%;
  }
`;
