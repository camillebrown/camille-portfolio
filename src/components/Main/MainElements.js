import styled from 'styled-components'

export const MainContainer = styled.div`
    color: black;
    background: ${({ lightBg }) => (lightBg ? '#f2d09b' : 'white')};
    @media screen and (max-width: 768px){
       padding: 100px 0; 
    }
`

export const MainRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#df9c37' : '#3f170b')};

    @media screen and (max-width:480px){
        font-size:32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#3f170b' : '#a84523')};
`