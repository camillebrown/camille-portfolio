import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const WebRights = styled.small`
  color: #444443;
  font-family: 'Lora', serif;
`;

export const SocialIcon = styled(LinkRouter)`
  color: #444443;

  &:hover {
    color: #df9c37;
    transition: all 0.2s ease-in-out;
  }
`;
