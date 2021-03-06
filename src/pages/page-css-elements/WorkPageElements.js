import styled from 'styled-components';

export const WorkPageContainer = styled.div`
  max-width: 90%;
  min-height: 76vh;
  max-width: 80%;
  line-height: 28px;
  color: #444443;
  font-family: 'Lato', serif;
  letter-spacing: 1.2px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: min-content;
  }

  @media screen and (max-width: 768px) {
    height: min-content;
  }

  @media only screen and (device-width: 414px) {
    width: 100%;
    height: min-content;
  }
  @media only screen and (device-width: 375px) {
    width: 100%;
    height: min-content;
  }
`;

export const WorkPageParagraph = styled.p`
  padding: 0px 5vw;
  margin: 2vh 3vw;
`;
