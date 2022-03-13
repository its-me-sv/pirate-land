import React from 'react';

import {Grid, Box} from './styles';

import {useBoardContext} from '../../contexts/board.context';
import {usePlayContext} from '../../contexts/play.context';
import {useUserContext} from '../../contexts/user.context';

interface GameGridProps {}

const GameGrid: React.FC<GameGridProps> = () => {
    const {board, clicks, setClicks} = useBoardContext();
    const {currPlayer, players} = usePlayContext();
    const {id} = useUserContext();

    const onBoxClick = (player: number, type: number, idx: number) => {
      if (player !== 0) return;
      if (id !== players[currPlayer]) return window.alert(`Not your chance`);
      if (clicks === 0) return window.alert(`No clicks left`);
      window.alert(`${clicks-1} clicks left`);
      setClicks!(clicks - 1);
    };

    return (
      <Grid>
        {board.map((val, idx) => (
          <Box
            onClick={() => onBoxClick(val, 1, idx)}
            avail={val !== 0}
            player={val}
            key={idx}
          />
        ))}
      </Grid>
    );
};

export default GameGrid;
