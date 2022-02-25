import React from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import ChatContainer from '../components/chat-container';
import IslandHeader from '../components/island-header';

import level1 from '../assets/lands/f1.png';
import pirate1 from '../assets/pirates/face-1.png';

const IslandContainer = styled.div``;

const GameArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 0.3rem;
  padding: 0 0.3rem;
  height: 90vh;
`;

interface IslandPageProps {}

const IslandPage: React.FC<IslandPageProps> = () => {
    const {gameId} = useParams();
    return (
      <IslandContainer>
        <IslandHeader gameId={gameId} />
        <GameArea>
          <ChatContainer title="Team Chat" variant={1} />
          <div className="board">
            <img className="level-img" alt="" src={level1} />
            <div className="board-footer">
              <div className="team-players">
                <img className="footer-player" alt="" src={pirate1} />
                <img className="footer-player" alt="" src={pirate1} />
                <img className="footer-player" alt="" src={pirate1} />
                <img className="footer-player" alt="" src={pirate1} />
              </div>
              <div className="scr-brd">
                <span className="scr-txt">12</span>
                <span className="vrtcl-ln" />
                <span className="scr-txt">12</span>
              </div>
              <div className="team-players">
                <img className="footer-player" alt="" src={pirate1} />
                <img className="footer-player" alt="" src={pirate1} />
                <img className="footer-player" alt="" src={pirate1} />
                <img className="footer-player" alt="" src={pirate1} />
              </div>
            </div>
          </div>
          <ChatContainer title="World Chat" variant={2} />
        </GameArea>
      </IslandContainer>
    );
};

export default IslandPage;
