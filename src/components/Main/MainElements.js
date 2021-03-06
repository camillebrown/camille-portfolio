import styled from 'styled-components';

export const MainContainer = styled.div`
  z-index: 1;
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 1024px) {
    height: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (device-width: 414px) {
    height: 100vh;
  }
  @media only screen and (device-width: 390px) {
    height: 85vh;
  }
  @media only screen and (device-width: 375px) {
    height: 85vh;
  }
`;

export const MainBackground = styled.div`
  height: 80vh;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin-top: 45%;
  }

  @media only screen and (device-width: 414px) {
    margin: 20%;
  }
`;

export const MainWrapper = styled.div`
  z-index: 3;
  display: grid;
  max-width: 80%;
  margin: 0 auto;
  position: absolute;

  @media screen and (max-width: 1024px) {
    max-width: 90%;
  }
`;

export const MainBlock1 = styled.div`
  background-image: url('https://i.ibb.co/8mRjBMB/bg-circle.png');
  background-repeat: no-repeat;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 51%;
  }

  @media only screen and (device-width: 414px) {
    display: none;
  }
  @media only screen and (device-width: 390px) {
    display: none;
  }
  @media only screen and (device-width: 375px) {
    display: none;
  }
`;

export const MainBlock2 = styled.div`
  background: url('https://i.ibb.co/Rzwwz9t/Screen-Shot-2021-06-23-at-12-48-32-PM.png')
    bottom right no-repeat;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 52.5%;
  }

  @media only screen and (device-width: 414px) {
    display: none;
  }
  @media only screen and (device-width: 375px) {
    display: none;
  }
`;

export const MainRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  padding: 0px 10px;
  margin: 0px 20px;

  @media screen and (max-width: 768px) {
    margin: 30px 0px;
    padding: 0;
    text-align: center;
  }

  @media only screen and (device-width: 414px) {
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;
  padding: 0px 20px;
  margin: 0px 40px;

  @media screen and (max-width: 1024px) {
    margin: 0px 10px;
    padding: 0px 10px;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0;
  }

  @media only screen and (device-width: 414px) {
    margin: 0;
    padding: 0;
  }
`;

export const ProjectDesc = styled.p`
  max-width: 80%;
  line-height: 28px;
  color: #444443;
  font-family: 'Lato', serif;
  letter-spacing: 1.2px;

  @media only screen and (device-width: 414px) {
    max-width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 375px) {
    max-width: 90%;
  }
`;
