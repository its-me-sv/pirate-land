import React, {createContext, useContext, useState} from 'react';

import {useAPIContext} from '../contexts/api.context';
import {useUserContext} from '../contexts/user.context';
import {useLobbyContext} from '../contexts/lobby.context';
import axios from 'axios';

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
    const {REST_API} = useAPIContext();
    const {token, setLoading} = useUserContext();
    const {currTeam: team} = useLobbyContext();

    const [currPlayer, setCurrPlayer] = useState<number>(defaultState.currPlayer);
    const [players, setPlayers] = useState<Array<string>>(defaultState.players);
    const [currTeamId, setCurrTeamId] = useState<string>(defaultState.currTeamId);
    const [oppTeamId, setOppTeamId] = useState<string>(defaultState.oppTeamId);
    const [initial, setInitial] = useState<boolean>(defaultState.initial);

    const initialPlayFetch = (gameId: string) => {
      setLoading!(true);
      axios.post(`${REST_API}/games/init_fetch`, {gameId, team}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then(({data}) => {
          setCurrPlayer(data.currPlayer);
          setPlayers(data.players);
          setCurrTeamId(data.currTeamId);
          setOppTeamId(data.oppTeamId);
          setInitial(data.initial);
          setLoading!(false);
      }).catch(() => setLoading!(false));
    };

    return (
        <PlayContext.Provider value={{
            currPlayer, players, currTeamId, oppTeamId, initial,
            initialPlayFetch
        }}>{children}</PlayContext.Provider>
    );
};
