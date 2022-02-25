import React from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import ChatContainer from '../components/chat-container';
import IslandHeader from '../components/island-header';
import TeamPlayers from '../components/team-players';

import level1 from '../assets/lands/f1.png';

const IslandContainer = styled.div``;

const GameArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 0.3rem;
  padding: 0 0.3rem;
  height: 90vh;
`;

const BoardContainer = styled.div`
  border: 3px solid black;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LevelImg = styled.img.attrs({
  alt: "",
})`
  height: 80vh;
  width: 100%;
  border-bottom: 2px solid black;
`;

const BoardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
`;

const ScoreBoard = styled.a.attrs({
  target: "_blank",
})`
  border: 2px dashed rgb(0, 0, 0, 0.5);
  border-radius: 3px;
  padding: 0.3rem 0.7rem;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  cursor: pointer;
  text-decoration: none;
`;

const VrtclLn = styled.span`
  border-left: 2px solid rgb(0, 0, 0, 0.8);
`;

const ScoreText = styled.span<{ variant: number }>`
  font-family: PirateKids;
  font-size: 2.1rem;
  color: ${(props) => (props.variant === 1 ? `#2e66df` : `#fe0002`)};
`;

interface IslandPageProps {}

const IslandPage: React.FC<IslandPageProps> = () => {
    const {gameId} = useParams();
    return (
      <IslandContainer>
        <IslandHeader gameId={gameId} />
        <GameArea>
          <ChatContainer title="Team Chat" variant={1} />
          <BoardContainer>
            <LevelImg src={level1} />
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
