import React from 'react';
import styled from 'styled-components';

import pirate1 from '../../assets/pirates/face-1.png';
import pirate2 from '../../assets/pirates/face-2.png';
import pirate3 from '../../assets/pirates/face-3.png';
import pirate4 from '../../assets/pirates/face-4.png';

const pirateMapper: {[key:string]: string} = {
    1: pirate1,
    2: pirate2,
    3: pirate3,
    4: pirate4,
};

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayerImage = styled.img.attrs({
    alt: ''
})`
  width: 60%;
  height: 60%;
`;

const PlayerName = styled.span`
  font-family: bahnschrift;
  font-size: 1.4rem;
  opacity: 0.7;
`;

interface PlayerProps {
    name: string;
    variant: number;
}

const Player: React.FC<PlayerProps> = ({variant, name}) => {
    return (
        <PlayerContainer>
            <PlayerImage src={pirateMapper[variant]} />
            <PlayerName>{name}</PlayerName>
        </PlayerContainer>
    );
};

export default Player;
