import React from 'react';
import styled from 'styled-components';

import Button from '../button';
import Player from '../player';

import {useLobbyContext} from '../../contexts/lobby.context';

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const TeamTitle = styled.div<{ variant: number }>`
  font-family: calibri;
  font-size: 2.4rem;
  color: #567ace;
  ${(props) => props.variant === 2 && `color: #e61d30;`};
`;

const PlayersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
`;

interface TeamProps {
  teamName: string;
  variant: number;
}

const Team: React.FC<TeamProps> = ({teamName, variant}) => {
  const {team1, team2, currTeam} = useLobbyContext();
  const players: Array<string> = teamName === "Team 1" ? team1 : team2;
  return (
    <TeamContainer>
      <TeamTitle variant={variant}>{teamName}</TeamTitle>
      <PlayersContainer>
        {players.map((val, idx) => (
          <Player key={idx} variant={idx + 1} id={val} />
        ))}
      </PlayersContainer>
      <Button
        disabled={currTeam === teamName}
        variant={variant}
        text={`Join ${teamName}`}
        onPress={() => {}}
      />
    </TeamContainer>
  );
};

export default Team;
