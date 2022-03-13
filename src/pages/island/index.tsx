import React, {useEffect} from 'react';
import {
  useParams, 
  // useNavigate
} from 'react-router-dom';

import ChatContainer from '../../components/chat-container';
import IslandHeader from '../../components/island-header';
import BlockLoader from '../../components/block-loader';
import PlayFooter from '../../components/play-footer';

import {useUserContext} from '../../contexts/user.context';
import {useScoreboardContext} from '../../contexts/scoreboard.context';
import {usePlayContext} from '../../contexts/play.context';
import {useLobbyContext} from '../../contexts/lobby.context';

import {
  IslandContainer,
  GameArea,
  BoardContainer,
} from './styles';

import GameGrid from '../../components/game-grid';

interface IslandPageProps {}

const IslandPage: React.FC<IslandPageProps> = () => {
    const {gameId} = useParams();
    const {loading} = useUserContext();
    const {fetchScoreboard} = useScoreboardContext();
    const {initialPlayFetch} = usePlayContext();
    const {currTeam} = useLobbyContext();
    // const navigate = useNavigate();
    // const takeToScoreboard = () => navigate(`../island/${gameId}/scoreboard`);

    useEffect(() => {
      initialPlayFetch!(gameId as string);
      fetchScoreboard!(gameId as string);
    }, [currTeam]);
    
    return (
      <IslandContainer>
        {loading && <BlockLoader />}
        <IslandHeader gameId={gameId} />
        <GameArea>
          <ChatContainer title="Team Chat" variant={1} />
          <BoardContainer>
            <GameGrid />
            <PlayFooter />
          </BoardContainer>
          <ChatContainer title="World Chat" variant={2} />
        </GameArea>
      </IslandContainer>
    );
};

export default IslandPage;
