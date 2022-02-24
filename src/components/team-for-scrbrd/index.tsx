import React, {useState} from 'react';
import styled from 'styled-components';

import {TeamContainer, TeamTitle} from '../team';
import PlayerScoreboard, {PlayerContainer, PlayerText} from '../player-scrbrd';

const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

interface TeamScoreBoardProps {
    teamName: string;
    variant: number;
}

const TeamScoreboard: React.FC<TeamScoreBoardProps> = ({teamName, variant}) => {
    const [players, setPlayers] = useState<Array<string>>(["Suraj Vijay", "Suraj Vijay"]);
    return (
      <TeamContainer>
        <TeamTitle variant={variant}>{teamName}</TeamTitle>
        <PlayersContainer>
          <PlayerContainer>
            <span />
            <PlayerText>Pirate</PlayerText>
            <PlayerText>Player</PlayerText>
            <PlayerText>Captures</PlayerText>
            <PlayerText>Caught</PlayerText>
          </PlayerContainer>
          {[...players, ...players].map((name, idx) => (
            <PlayerScoreboard key={idx} variant={idx+1} name={name} captures={4} caught={4} />
          ))}
        </PlayersContainer>
      </TeamContainer>
    );
};

export default TeamScoreboard;
