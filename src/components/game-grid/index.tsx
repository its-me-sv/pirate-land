import React, {useState} from 'react';

import {Grid, Box} from './styles';

interface GameGridProps {}

const dummyData: Array<number> = Array(135).fill(0);

const GameGrid: React.FC<GameGridProps> = () => {
    const [grid, setGrid] = useState<Array<number>>(dummyData);

    const onBoxClick = (player: number, type: number, idx: number) => {
        if (player !== 0) return;
        setGrid(oldGrid => {
            const newGrid = [...oldGrid];
            newGrid[idx] = type;
            return newGrid;
        });
    };

    return (
      <Grid>
        {grid.map((val, idx) => (
          <Box onClick={() => onBoxClick(val, 1, idx)} avail={val !== 0} player={val} key={idx} />
        ))}
      </Grid>
    );
};

export default GameGrid;
