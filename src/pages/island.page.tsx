import React from 'react';
import {useParams} from 'react-router-dom';

import ChatContainer from '../components/chat-container';

interface IslandPageProps {}

const IslandPage: React.FC<IslandPageProps> = () => {
    const {gameId} = useParams();
    return (
      <div className="island-container">
        <div className="header">
          <span className="header-txt">{gameId}</span>
          <span className="title-txt">Pirate Land</span>
          <span className="header-txt">Round - 1</span>
        </div>
        <div className="game-area">
          <ChatContainer title="Team Chat" variant={1} />
          <div className="board">Game Board</div>
          <ChatContainer title="World Chat" variant={2} />
        </div>
      </div>
    );
};

export default IslandPage;
