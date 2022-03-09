import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {APIContextProvider} from './contexts/api.context';
import {UserContextProvider} from './contexts/user.context';
import {SocketContextProvider} from './contexts/socket.context';
import {ScoreboardContextProvider} from './contexts/scoreboard.context';

ReactDOM.render(
  <React.StrictMode>
    <APIContextProvider>
      <UserContextProvider>
        <SocketContextProvider>
          <ScoreboardContextProvider>
            <App />
          </ScoreboardContextProvider>
        </SocketContextProvider>
      </UserContextProvider>
    </APIContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
