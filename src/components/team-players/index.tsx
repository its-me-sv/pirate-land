import React, {useState} from 'react';
import styled from 'styled-components';

import {pirateMapper} from '../player';

const TeamPlayersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  margin-left: 1rem;
`;

const TeamPlayer = styled.img.attrs({
  alt: "",
})`
  width: 80%;
  height: 80%;
`;

interface TeamPlayersProps {}

const TeamPlayers: React.FC<TeamPlayersProps> = () => {
    const [players, setPlayers] = useState<Array<number>>([1, 2, 3, 4]);
    return (
      <TeamPlayersContainer>
        {players.map((val, idx) => <TeamPlayer key={idx} src={pirateMapper[idx+1]} />)}
      </TeamPlayersContainer>
    );
};

export default TeamPlayers;
