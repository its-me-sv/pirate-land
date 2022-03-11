import React, {createContext, useContext, useState} from 'react';
import {Socket} from "socket.io-client";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  updateRoom?: () => void;
  hostLeft?: () => void;
}

interface ClientToServerEvents {
  joinRoom?: (roomId: string) => void;
  leaveRoom?: (roomId: string) => void;
  updateRoom?: (roomId: string) => void;
  hostLeft?: (roomId: string) => void;
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
