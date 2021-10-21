import styled from 'styled-components';

export const WorkPageContainer = styled.div`
  max-width: 90%;
  height: 75.5vh;

  @media screen and (max-width: 1024px) {
    height: 79vh;
  }

  @media screen and (max-width: 768px) {
    height: 225vh;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const WorkPageParagraph = styled.p`
  padding: 0px 5vw;
  margin: 2vh 3vw;
`;
