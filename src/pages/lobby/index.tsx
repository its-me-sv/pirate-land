import React, {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

import Team from '../../components/team';
import {LogoutSection} from '../profile/styles';
import Button from '../../components/button';
import BlockLoader from '../../components/block-loader';
import {useUserContext} from '../../contexts/user.context';
import {useAPIContext} from '../../contexts/api.context';

import {
  LobbyContainer,
  TitleText,
  GameId,
  TeamsContainer,
  VrtclLn,
  LaunchContainer,
} from "./styles";

interface LobbyPageProps {}

const LobbyPage: React.FC<LobbyPageProps> = () => {
    const navigate = useNavigate();
    const {loading, setLoading, token} = useUserContext();
    const {gameId} = useParams();
    const {REST_API} = useAPIContext();
    
    const setCurrentGame = async (gid: string|null) => {
      setLoading!(true);
      try {
        await axios.put(`${REST_API}/users/set_current_game`, {gameId:gid}, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setLoading!(false);
      } catch (err) {
        setLoading!(false);
      }
    };
    const leaveGame = async () => {
      await setCurrentGame(null);
      navigate('../', {replace: true});
    };

    useEffect(() => {

    }, []);

    return (
      <LobbyContainer>
        {loading && <BlockLoader />}
        <TitleText>Pirate Land</TitleText>
        <GameId>{gameId}</GameId>
        <TeamsContainer>
          <Team teamName="Team 1" variant={1} />
          <VrtclLn />
          <Team teamName="Team 2" variant={2} />
        </TeamsContainer>
        <LogoutSection>
          <Button text="Exit game" onPress={leaveGame} />
        </LogoutSection>
        <LaunchContainer>
          <Button variant={2} text="Launch game" onPress={() => {}} />
        </LaunchContainer>
      </LobbyContainer>
    );
};

export default LobbyPage;
