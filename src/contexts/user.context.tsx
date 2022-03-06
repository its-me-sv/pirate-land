import React, {createContext, useContext, useState} from 'react';

interface UserContextInterface {
    id: string;
    token: string;
    loading: boolean;
    setId?: (val: string) => void;
    setToken?: (val: string) => void;
    setLoading?: (val: boolean) => void;
}

const defaultState: UserContextInterface = {
    id: '',
    token: '',
    loading: false,
};

export const UserContext = createContext<UserContextInterface>(defaultState);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC = ({children}) => {
    const [id, setId] = useState<string>(defaultState.id);
    const [token, setToken] = useState<string>(defaultState.token);
    const [loading, setLoading] = useState<boolean>(defaultState.loading);
    return (
        <UserContext.Provider value={{
            id, token, loading,
            setId, setToken, setLoading
        }}>{children}</UserContext.Provider>
    );
};