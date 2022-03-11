import React, {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

import Team from '../../components/team';
import {LogoutSection} from '../profile/styles';
import Button from '../../components/button';
import BlockLoader from '../../components/block-loader';
import {useUserContext} from '../../contexts/user.context';
import {useAPIContext} from '../../contexts/api.context';
import {useLobbyContext} from '../../contexts/lobby.context';
import {useSocketContext} from '../../contexts/socket.context';

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
    const {loading, setLoading, token, setCurrentGame: scg, id} = useUserContext();
    const {gameId} = useParams();
    const {REST_API} = useAPIContext();
    const {fetchGameForLobby, creator, currTeam} = useLobbyContext();
    const {socket} = useSocketContext();
    
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
      try {
        if (currTeam.length > 0) {
          console.log("here");
          await axios.put(`${REST_API}/games/leave_team`, {gameId, teamNo: currTeam}, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          });
        }
        await setCurrentGame(null);
        if (creator === id) {
          socket?.emit("hostLeft", `LOBBY:${gameId}`);
        }
        socket?.emit("updateRoom", `LOBBY:${gameId}`);
        socket?.emit("leaveRoom", `LOBBY:${gameId}`);
        scg!("");
        navigate("../profile", { replace: true });
      } catch (err) {window.alert(err);}
    };

    useEffect(() => {
      setCurrentGame(gameId as string | null);
      fetchGameForLobby!(gameId as string);
    }, []);

    useEffect(() => {
      socket?.emit("joinRoom", `LOBBY:${gameId}`);
      socket?.on("updateRoom", () => fetchGameForLobby!(gameId as string));
      socket?.on("hostLeft", () => {
        leaveGame();
        window.alert("Host left the game");
      });
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
        {creator === id && (
          <LaunchContainer>
            <Button variant={2} text="Launch game" onPress={() => {}} />
          </LaunchContainer>
        )}
      </LobbyContainer>
    );
};

export default LobbyPage;
