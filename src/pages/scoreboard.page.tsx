import React from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';

import {
    LobbyContainer as ScoreboardContainer, 
    TitleText, 
    GameId as CaptionText, 
    TeamsContainer,
    VrtclLn,
} from './lobby.page';
import TeamScoreboard from '../components/team-for-scrbrd';

const GameIdSection = styled.div`
  position: absolute;
  top: 1%;
  left: 1%;
`;

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
