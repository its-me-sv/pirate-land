import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';

// pages
import HomePage from './pages/home/home.page';
import ProfilePage from './pages/profile';
import LobbyPage from './pages/lobby';
import ScoreboardPage from './pages/scoreboard';
import IslandPage from './pages/island';

// providers
import {APIContextProvider} from './contexts/api.context';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <APIContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/island/:gameId/lobby" element={<LobbyPage />} />
          <Route
            path="/island/:gameId/scoreboard"
            element={<ScoreboardPage />}
          />
          <Route path="/island/:gameId/play" element={<IslandPage />} />
        </Routes>
      </HashRouter>
    </APIContextProvider>
  );
}

export default App;
