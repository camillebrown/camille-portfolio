import styled from 'styled-components'

export const MainContainer = styled.div`
    color: black;
    background: ${({ lightBg }) => (lightBg ? '#EBE9E5' : 'white')};
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