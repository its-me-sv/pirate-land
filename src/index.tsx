import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import {APIContextProvider} from './contexts/api.context';
import {UserContextProvider} from './contexts/user.context';

ReactDOM.render(
  <React.StrictMode>
    <APIContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </APIContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
