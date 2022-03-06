import React, {createContext, useContext, useState} from 'react';

interface UserContextInterface {
    id: string;
    token: string;
    username: string;
}

export const UserContext = createContext<UserContextInterface|null>(null);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC = ({children}) => {
    const [id, setId] = useState<string>('');
    const [token, setToken] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    return (
        <UserContext.Provider value={{
            id, token, username
        }}>{children}</UserContext.Provider>
    );
};