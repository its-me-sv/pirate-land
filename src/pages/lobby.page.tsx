import React from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

import Team from '../components/team';

const LobbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const TitleText = styled.span`
  font-family: "PirateKids";
  font-size: 10vh;
  color: #e61d30;
  -webkit-text-stroke-width: 2.8px;
  -webkit-text-stroke-color: #354b7d;
`;

const GameId = styled.span`
  font-family: bahnschrift;
  font-size: 2.1rem;
  opacity: 0.6;
`;

const TeamsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0fr 1fr;
  align-items: center;
`;

const VrtclLn = styled.div`
  border-left: 3px solid black;
  border-radius: 2rem;
  opacity: 0.7;
  height: 91%;
`;

interface LobbyPageProps {}

const LobbyPage: React.FC<LobbyPageProps> = () => {
    const {gameId} = useParams();
    return (
      <LobbyContainer>
        <TitleText>Pirate Land</TitleText>
        <GameId>{gameId}</GameId>
        <TeamsContainer>
          <Team teamName="Team 1" variant={1} />
          <VrtclLn />
          <Team teamName="Team 2" variant={2} />
        </TeamsContainer>
      </LobbyContainer>
    );
};

export default LobbyPage;
