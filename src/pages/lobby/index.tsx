import React from 'react';
import {useParams} from 'react-router-dom';

import Team from '../../components/team';
import {LogoutSection} from '../profile/styles';
import Button from '../../components/button';

import {
  LobbyContainer,
  TitleText,
  GameId,
  TeamsContainer,
  VrtclLn
} from './styles';

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
        <LogoutSection>
          <Button text="Exit game" onPress={() => {}} />
        </LogoutSection>
      </LobbyContainer>
    );
};

export default LobbyPage;
