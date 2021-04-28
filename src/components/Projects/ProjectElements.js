import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const ProjectCard = styled(LinkRouter)`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`