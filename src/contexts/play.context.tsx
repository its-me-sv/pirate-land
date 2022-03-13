import React, {createContext, useContext, useState} from 'react';

import {} from '../contexts/lobby.context';

interface PlayContextInterface {
  currPlayer: number;
  players: Array<string>;
  currTeamId: string;
  oppTeamId: string;
  initial: boolean;
  initialPlayFetch?: (gameId: string) => void;
};

const defaultState: PlayContextInterface = {
  currPlayer: 0,
  players: [],
  currTeamId: "",
  oppTeamId: "",
  initial: true,
};

export const PlayContext = createContext<PlayContextInterface>(defaultState);

export const usePlayContext = () => useContext(PlayContext);

export const PlayContextProvider: React.FC = ({children}) => {
    const [currPlayer, setCurrPlayer] = useState<number>(defaultState.currPlayer);
    const [players, setPlayers] = useState<Array<string>>(defaultState.players);
    const [currTeamId, setCurrTeamId] = useState<string>(defaultState.currTeamId);
    const [oppTeamId, setOppTeamId] = useState<string>(defaultState.oppTeamId);
    const [initial, setInitial] = useState<boolean>(defaultState.initial);

    const initialPlayFetch = (gameId: string) => {
    };

    return (
        <PlayContext.Provider value={{
            currPlayer, players, currTeamId, oppTeamId, initial,
            initialPlayFetch
        }}>{children}</PlayContext.Provider>
    );
};
