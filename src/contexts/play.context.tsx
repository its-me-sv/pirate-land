import React, {createContext, useContext, useState} from 'react';

interface PlayContextInterface {
    currPlayer: number;
    players: Array<string>;
    team1Id: string;
    team2Id: string;
};
