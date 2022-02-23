import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';

import HomePage from './pages/home.page';
import ProfilePage from './pages/profile.page';
import LobbyPage from './pages/lobby.page';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/island/:gameId/lobby' element={<LobbyPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
