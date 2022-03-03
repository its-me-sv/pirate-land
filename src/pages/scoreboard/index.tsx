import React from 'react';
import {useParams} from "react-router-dom";

import {
  LobbyContainer as ScoreboardContainer, 
  TitleText, 
  GameId as CaptionText, 
  TeamsContainer,
  VrtclLn,
} from '../lobby/styles';
import TeamScoreboard from '../../components/team-for-scrbrd';

import {GameIdSection} from './styles';

interface ScoreBoardPageProps {}

const ScoreboardPage: React.FC<ScoreBoardPageProps> = () => {
    const {gameId} = useParams();
    return (
      <ScoreboardContainer>
        <GameIdSection>
          <CaptionText>{gameId}</CaptionText>
        </GameIdSection>
        <TitleText>Pirate Land</TitleText>
        <CaptionText>Scoreboard</CaptionText>
        <TeamsContainer>
            <TeamScoreboard teamName="Team 1" variant={1} />
            <VrtclLn />
            <TeamScoreboard teamName="Team 2" variant={2} />
        </TeamsContainer>
      </ScoreboardContainer>
    );
};

export default ScoreboardPage;
