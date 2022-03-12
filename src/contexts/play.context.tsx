import React, {createContext, useContext, useState} from 'react';

interface PlayContextInterface {
    gameId: string;
    currPlayer: string;
    board: string;
};