import React, {createContext, useContext} from 'react';

interface APIContextInterface {
  REST_API: string;
}

const defaultState: APIContextInterface = {
  REST_API: "http://192.168.29.97:5000/api",
};

export const APIContext = createContext<APIContextInterface>(defaultState);

export const useAPIContext = () => useContext(APIContext);

export const APIContextProvider: React.FC = ({children}) => {
  return (
    <APIContext.Provider value={defaultState}>{children}</APIContext.Provider>
  );
};