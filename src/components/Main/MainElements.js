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
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const ProjRow = styled.div`
    display: ${({ grid }) => (grid ? 'visible' : 'none')};
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height:1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#df9c37' : '#3f170b')};

    @media screen and (max-width:480px){
        font-size:32px;
    }
`

export const Subtitle = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    font-size: 21px;
    line-height: 28px;
    color: ${({ darkText }) => (darkText ? '#3f170b' : '#a84523')};
    font-family: 'Inter', sans-serif;
    letter-spacing: -0.4px;
`