import React, {useEffect} from 'react';
import axios from 'axios';
import {io} from 'socket.io-client';
import {useNavigate} from 'react-router-dom';

import {Title} from '../home/styles';
import Button from '../../components/button';
import RoomsForm from '../../components/rooms-form';
import UpdateForm from '../../components/update-form';
import GamesRecord from "../../components/games-record";
import BlockLoader from '../../components/block-loader';

import {useAPIContext} from '../../contexts/api.context';
import {useUserContext} from '../../contexts/user.context';
import {useSocketContext} from '../../contexts/socket.context';
import {useBoardContext} from '../../contexts/board.context';
import {useLobbyContext} from '../../contexts/lobby.context';
import {usePlayContext} from '../../contexts/play.context';
import {useScoreboardContext} from '../../contexts/scoreboard.context';

import {
  ProfileContainer,
  ContentContainer,
  LogoutSection,
} from './styles';

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
    const navigate = useNavigate();
    const {REST_API, SOCKET} = useAPIContext();
    const {setSocket, socket} = useSocketContext();
    const {token, setId, setToken, setLoading, loading, id, currentGame} = useUserContext();
    const {resetBoard} = useBoardContext();
    const {resetLobby} = useLobbyContext();
    const {resetPlay} = usePlayContext();
    const {resetScoreboard} = useScoreboardContext();

    useEffect(() => {
      resetBoard!();
      resetLobby!();
      resetPlay!();
      resetScoreboard!();
      if (socket) return;
      setSocket!(io(SOCKET, {query: {userId: id}}));
    }, []);

    useEffect(() => {
      if (currentGame?.length > 0) navigate(`../island/${currentGame}/lobby`);
    }, [currentGame]);
    
    const logoutUser = () => {
      setLoading!(true);
      axios.delete(`${REST_API}/auth/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setId!('');
        setToken!('');
        setLoading!(false);
        socket?.close();
        setSocket!(null);
      })
      .catch(() => setLoading!(false));
    };

    return (
      <ProfileContainer>
        {loading && <BlockLoader />}
        <Title>Pirate Land</Title>
        <ContentContainer>
          <RoomsForm />
          <UpdateForm />
          <GamesRecord />
        </ContentContainer>
        <LogoutSection>
          <Button onPress={logoutUser} text="Logout" />
        </LogoutSection>
      </ProfileContainer>
    );
};

export default ProfilePage;
