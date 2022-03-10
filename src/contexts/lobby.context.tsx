import React, {createContext, useContext, useState} from 'react';

interface LobbyContextInterface {
  id: string;
  creator: string;
  launched: boolean;
  team1: string;
  team2: string;
  currTeam: string;
  fetchGameForLobby?: (val: string) => void;
}

const defaultState: LobbyContextInterface = {
    id: '',
    creator: '',
    launched: false,
    team1: '',
    team2: '',
    currTeam: '',
};

export const LobbyContext = createContext<LobbyContextInterface>(defaultState);

export const useLobbyContext = () => useContext(LobbyContext);

export const LobbyContextProivder: React.FC = ({children}) => {
    const [id, setId] = useState<string>(defaultState.id);
    const [creator, setCreator] = useState<string>(defaultState.creator);
    const [team1, setTeam1] = useState<string>(defaultState.team1);
    const [team2, setTeam2] = useState<string>(defaultState.team2);
    const [currTeam, setCurrTeam] = useState<string>(defaultState.currTeam);
    const [launched, setLaunched] = useState<boolean>(defaultState.launched);

    const fetchGameForLobby = (gameId: string) => {

    };

    return (
        <LobbyContext.Provider value={{
            id, creator, team1, team2, currTeam, launched,
            fetchGameForLobby
        }}>{children}</LobbyContext.Provider>
    );
};
