import React, {createContext, useContext, useState} from 'react';
import {Socket} from "socket.io-client";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface SocketContextInterface {
  socket?: Socket<ServerToClientEvents, ClientToServerEvents>;
  setSocket?: (val: any) => void;
}

const defaultState: SocketContextInterface = {};

export const SocketContext = createContext<SocketContextInterface>(defaultState);

export const useSocketContext = () => useContext(SocketContext);

export const SocketContextProvider: React.FC = ({children}) => {
    const [socket, setSocket] =
      useState<Socket<ServerToClientEvents, ClientToServerEvents>>();
    return (
        <SocketContext.Provider value={{
            socket,
            setSocket
        }}>{children}</SocketContext.Provider>
    );
};
