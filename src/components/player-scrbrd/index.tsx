import React from 'react';
import styled from 'styled-components';

import {pirateMapper} from '../player';

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const PlayerImage = styled.img.attrs({
  alt: "",
})`
  width: 14%;
  height: 14%;
`;

export const PlayerText = styled.span`
  font-family: bahnschrift;
  font-size: 1.4rem;
  opacity: 0.7;
`;

interface PlayerScoreboardProps {
    name: string;
    captures: number;
    caught: number;
    variant: number;
}

const PlayerScoreboard: React.FC<PlayerScoreboardProps> = ({name, captures, caught, variant}) => {
    return (
        <PlayerContainer>
            <PlayerImage src={pirateMapper[variant]} />
            <PlayerText>{name}</PlayerText>
            <PlayerText>{captures}</PlayerText>
            <PlayerText>{caught}</PlayerText>
        </PlayerContainer>
    );
};

export default PlayerScoreboard;
