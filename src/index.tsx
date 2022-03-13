import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {APIContextProvider} from './contexts/api.context';
import {UserContextProvider} from './contexts/user.context';
import {SocketContextProvider} from './contexts/socket.context';
import {ScoreboardContextProvider} from './contexts/scoreboard.context';
import {LobbyContextProivder} from './contexts/lobby.context';
import {PlayContextProvider} from './contexts/play.context';

ReactDOM.render(
  <React.StrictMode>
    <APIContextProvider>
      <UserContextProvider>
        <SocketContextProvider>
          <ScoreboardContextProvider>
            <LobbyContextProivder>
              <PlayContextProvider>
                <App />
              </PlayContextProvider>
            </LobbyContextProivder>
          </ScoreboardContextProvider>
        </SocketContextProvider>
      </UserContextProvider>
    </APIContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
