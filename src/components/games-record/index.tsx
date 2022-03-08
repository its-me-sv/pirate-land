import React, {useState, useEffect} from 'react';

import {RecordContainer, GamesHolder, EndBar} from "./styles";
import {ColTitle} from '../rooms-form';

import RecordItem from '../record-item';

import {getDateObj} from '../../utils/timeuuid-to-date';

interface GameProp {
  id: string;
  time: string;
}

const record: GameProp = {
  id: "69c3d6d0-9eee-11ec-b6fe-c1af4b01ba4a",
  time: getDateObj("69c3d6d0-9eee-11ec-b6fe-c1af4b01ba4a").toISOString(),
};

const records: Array<GameProp> = [...Array(14)].map(() => record);

interface GamesRecordProps {}

const GamesRecord: React.FC<GamesRecordProps> = () => {
    const [games, setGames] = useState<Array<GameProp>>([]);

    const fetchData = () => setGames(prev => [...prev, ...records]);

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <RecordContainer>
        <ColTitle>Games Record</ColTitle>
        <GamesHolder>
          {games.map((game, idx) => (
            <RecordItem key={idx} {...game} />
          ))}
          <EndBar onMouseEnter={fetchData}>
            Hover here to fetch more
          </EndBar>
        </GamesHolder>
      </RecordContainer>
    );
};

export default GamesRecord;
