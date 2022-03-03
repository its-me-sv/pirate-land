import React from 'react';
import {useParams} from 'react-router-dom';

import ChatContainer from '../../components/chat-container';
import IslandHeader from '../../components/island-header';
import TeamPlayers from '../../components/team-players';

import {
  IslandContainer,
  GameArea,
  BoardContainer,
  BoardFooter,
  ScoreBoard,
  VrtclLn,
  ScoreText,
} from './styles';

import GameGrid from '../../components/game-grid';

interface IslandPageProps {}

const IslandPage: React.FC<IslandPageProps> = () => {
    const {gameId} = useParams();
    return (
      <IslandContainer>
        <IslandHeader gameId={gameId} />
        <GameArea>
          <ChatContainer title="Team Chat" variant={1} />
          <BoardContainer>
            <GameGrid />
            <BoardFooter>
              <TeamPlayers />
              <ScoreBoard href={`/#/island/${gameId}/scoreboard`}>
                <ScoreText variant={1}>12</ScoreText>
                <VrtclLn />
                <ScoreText variant={2}>12</ScoreText>
              </ScoreBoard>
              <TeamPlayers />
            </BoardFooter>
          </BoardContainer>
          <ChatContainer title="World Chat" variant={2} />
        </GameArea>
      </IslandContainer>
    );
};

export default IslandPage;
