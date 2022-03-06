import React from 'react';
import {HashRouter, Route, Routes, Navigate} from 'react-router-dom';

// pages
import HomePage from './pages/home/home.page';
import ProfilePage from './pages/profile';
import LobbyPage from './pages/lobby';
import ScoreboardPage from './pages/scoreboard';
import IslandPage from './pages/island';

// providers
import {APIContextProvider} from './contexts/api.context';
import {UserContextProvider, useUserContext} from './contexts/user.context';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {id} = useUserContext();
  return (
    <APIContextProvider>
      <UserContextProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={id.length ? <Navigate to="/profile" /> : <HomePage />} />
            <Route path="/profile" element={!id.length ? <Navigate to="/" /> : <ProfilePage />} />
            <Route path="/island/:gameId/lobby" element={!id.length ? <Navigate to="/" /> : <LobbyPage />} />
            <Route
              path="/island/:gameId/scoreboard"
              element={!id.length ? <Navigate to="/" /> : <ScoreboardPage />}
            />
            <Route path="/island/:gameId/play" element={!id.length ? <Navigate to="/" /> : <IslandPage />} />
            <Route path="/*" element={() => <h1>404</h1>} />
          </Routes>
        </HashRouter>
      </UserContextProvider>
    </APIContextProvider>
  );
}

export default App;
