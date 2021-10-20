import styled from 'styled-components';

export const MainContainer = styled.div`
  z-index: 1;
  font-family: 'Montserrat', sans-serif;
`;

export const MainBackground = styled.div`
  height: 80vh;
  width: 100%;
`;

export const MainWrapper = styled.div`
  z-index: 3;
  display: grid;
  max-width: 80%;
  margin: 0 auto;
  position: absolute;
`;

export const MainBlock1 = styled.div`
  background-image: url('https://i.ibb.co/8mRjBMB/bg-circle.png');
  background-repeat: no-repeat;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 51%;
  }
`;

export const MainBlock2 = styled.div`
  background: url('https://i.ibb.co/Rzwwz9t/Screen-Shot-2021-06-23-at-12-48-32-PM.png')
    bottom right no-repeat;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 52.5%;
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
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const ProjectDesc = styled.p`
  max-width: 80%;
  line-height: 28px;
  color: #444443;
  font-family: 'Lato', serif;
  letter-spacing: 1.2px;
`;
