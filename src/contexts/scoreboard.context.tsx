import React, {createContext, useContext, useState} from 'react';

export interface ScoreboardTeamProps {
    pid: string;
    captures: number;
    caught: number;
}

interface ScoreboardContextInterface {
  team1: Array<ScoreboardTeamProps>;
  team2: Array<ScoreboardTeamProps>;
  loading: boolean;
  setTeam1?: (val: Array<ScoreboardTeamProps>) => void;
  setTeam2?: (val: Array<ScoreboardTeamProps>) => void;
  setLoading?: (val: boolean) => void;
}

const defaultState: ScoreboardContextInterface = {
    team1: [],
    team2: [],
    loading: false
};

export const ScoreboardContext = createContext<ScoreboardContextInterface>(defaultState);

export const useScoreboardContext = () => useContext(ScoreboardContext);

export const ScoreboardContextProvider: React.FC = ({children}) => {
    const [team1, setTeam1] = useState<Array<ScoreboardTeamProps>>(defaultState.team1);
    const [team2, setTeam2] = useState<Array<ScoreboardTeamProps>>(defaultState.team2);
    const [loading, setLoading] = useState<boolean>(defaultState.loading);
    
    return (
        <ScoreboardContext.Provider value={{
            team1, team2, loading,
            setTeam1, setTeam2, setLoading
        }}>{children}</ScoreboardContext.Provider>
    );
};
