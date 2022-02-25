import React from 'react';
import {useParams} from 'react-router-dom';

import styled from 'styled-components';

import ChatContainer from '../components/chat-container';
import IslandHeader from '../components/island-header';
import BlockLoader from '../components/block-loader';

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
        <BlockLoader />
        <IslandHeader gameId={gameId} />
        <GameArea>
          <ChatContainer title="Team Chat" variant={1} />
          <div className="board"></div>
          <ChatContainer title="World Chat" variant={2} />
        </GameArea>
      </IslandContainer>
    );
};

export default IslandPage;
