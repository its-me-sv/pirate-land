import React from 'react';
import axios from 'axios';

import {Grid, Box} from './styles';

import {useAPIContext} from '../../contexts/api.context';
import {useBoardContext} from '../../contexts/board.context';
import {usePlayContext} from '../../contexts/play.context';
import {useUserContext} from '../../contexts/user.context';
import {useSocketContext} from '../../contexts/socket.context';
import {useLobbyContext} from '../../contexts/lobby.context';

interface GameGridProps {}

const GameGrid: React.FC<GameGridProps> = () => {
    const {REST_API} = useAPIContext();
    const {socket} = useSocketContext();
    const {id: gameId} = useLobbyContext();
    const {board, clicks, setClicks, fetchBoard, mtyp} = useBoardContext();
    const {currPlayer, players, currTeamId , oppTeamId, initial, updateChance} = usePlayContext();
    const {id, setLoading, token} = useUserContext();

    const onBoxClick = async (player: number, typ: number, idx: number) => {
      if (player !== 0) return;
      if (id !== players[currPlayer]) return window.alert(`Not your chance`);
      // if no more clicks, switch the chance
      if (clicks === 1) {
        await axios.put(`${REST_API}/games/update_chance`, {gameId}, {
          headers: {Authorization: `Bearer ${token}`,}
        });
        updateChance!();
        socket?.emit("updateChance", `LOBBY:${gameId}`);
        return;
      }
      // else, update the board
      try {
        setLoading!(true);
        const reqBody = {currTeamId, typ, idx, oppTeamId, initial};
        // update the board
        await axios.put(`${REST_API}/boards/update_board`, {...reqBody}, {
          headers: {Authorization: `Bearer ${token}`,}
        });
        fetchBoard!(currTeamId);
        // if initial update only team
        if (initial) socket?.emit("updateBoard", currTeamId);
        // else update everyone
        else socket?.emit("updateBoard", `LOBBY:${gameId}`);
        setClicks!(clicks - 1);
        setLoading!(false);
        window.alert(`${clicks-1} clicks left`);
      } catch (err) {setLoading!(false);}
    };

    return (
      <Grid>
        {board.map((val, idx) => (
          <Box
            onClick={() => onBoxClick(val, mtyp, idx)}
            avail={val !== 0}
            player={val}
            key={idx}
          />
        ))}
      </Grid>
    );
};

export default GameGrid;
