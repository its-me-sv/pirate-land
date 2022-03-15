import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import ChatContainer from '../../components/chat-container';
import IslandHeader from '../../components/island-header';
import BlockLoader from '../../components/block-loader';
import PlayFooter from '../../components/play-footer';

import {useUserContext} from '../../contexts/user.context';
import {useScoreboardContext} from '../../contexts/scoreboard.context';
import {usePlayContext} from '../../contexts/play.context';
import {useLobbyContext} from '../../contexts/lobby.context';
import {useSocketContext} from '../../contexts/socket.context';
import {useBoardContext} from '../../contexts/board.context';

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
    const {initialPlayFetch, currTeamId, updateChance} = usePlayContext();
    const {currTeam} = useLobbyContext();
    const {socket} = useSocketContext();
    const {fetchBoard} = useBoardContext();

    useEffect(() => {
      initialPlayFetch!(gameId as string);
      console.log("from island first ue");
      fetchScoreboard!(gameId as string);
    }, [currTeam]);

    useEffect(() => {
      if (!currTeamId.length) return;
      socket?.emit("joinRoom", currTeamId);
    }, [currTeamId]);

    useEffect(() => {
      socket?.on("updateBoard", (boardId) => {
        console.log("here 2");
        fetchBoard!(boardId);
      });
      socket?.on("updtBrd", () => {
        fetchBoard!(currTeamId);
        fetchScoreboard!(gameId as string);
        console.log("from island for updtBrd");
      });
      socket?.on("updateChance", () =>  {
        updateChance!();
      });
    }, [currTeamId, gameId]);
    
    return (
      <IslandContainer>
        {loading && <BlockLoader />}
        <IslandHeader gameId={gameId} />
        <GameArea>
          <ChatContainer title="Team Chat" variant={1} />
          <BoardContainer>
            <GameGrid />
            <PlayFooter gameId={gameId as string} />
          </BoardContainer>
          <ChatContainer title="World Chat" variant={2} />
        </GameArea>
      </IslandContainer>
    );
};

export default IslandPage;
