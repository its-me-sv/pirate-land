import React from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

import Button from '../components/button';
import pirate1 from '../assets/pirates/face-1.png';

const LobbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const TitleText = styled.span`
  font-family: "PirateKids";
  font-size: 10vh;
  color: #e61d30;
  -webkit-text-stroke-width: 2.8px;
  -webkit-text-stroke-color: #354b7d;
`;

const GameId = styled.span`
  font-family: bahnschrift;
  font-size: 2.1rem;
  opacity: 0.6;
`;

interface LobbyPageProps {}

const LobbyPage: React.FC<LobbyPageProps> = () => {
    const {gameId} = useParams();
    return (
      <LobbyContainer>
        <TitleText>Pirate Land</TitleText>
        <GameId>{gameId}</GameId>
        <div className="teams-container">
          <div className="team-container">
            <span className="team-title">Team 1</span>
            <div className="players-container">
              <div className="player-container">
                <img alt="" className="player-img" src={pirate1} />
                <span className="player-name">Suraj Vijay</span>
              </div>
              <div className="player-container">
                <img alt="" className="player-img" src={pirate1} />
                <span className="player-name">Suraj Vijay</span>
              </div>
              <div className="player-container">
                <img alt="" className="player-img" src={pirate1} />
                <span className="player-name">Suraj Vijay</span>
              </div>
              <div className="player-container">
                <img alt="" className="player-img" src={pirate1} />
                <span className="player-name">Suraj Vijay</span>
              </div>
            </div>
            <Button text="Join Team 1" onPress={() => {}} />
          </div>
          <div className="vrtcl-ln" />
          <div className="team-container">
            <span className="team-title">Team 1</span>
            <div className="players-container">
              <div className="player-container">
                <img alt="" className="player-img" src={pirate1} />
                <span className="player-name">Suraj Vijay</span>
              </div>
              <div className="player-container">
                <img alt="" className="player-img" src={pirate1} />
                <span className="player-name">Suraj Vijay</span>
              </div>
              <div className="player-container">
                <img alt="" className="player-img" src={pirate1} />
                <span className="player-name">Suraj Vijay</span>
              </div>
              <div className="player-container">
                <img alt="" className="player-img" src={pirate1} />
                <span className="player-name">Suraj Vijay</span>
              </div>
            </div>
            <Button text="Join Team 1" onPress={() => {}} />
          </div>
        </div>
      </LobbyContainer>
    );
};

export default LobbyPage;
