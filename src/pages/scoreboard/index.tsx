import React, {useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from 'axios';

import {
  LobbyContainer as ScoreboardContainer, 
  TitleText, 
  GameId as CaptionText, 
  TeamsContainer,
  VrtclLn,
} from '../lobby/styles';
import TeamScoreboard from '../../components/team-for-scrbrd';
import BlockLoader from '../../components/block-loader';

import {GameIdSection} from './styles';

import {useAPIContext} from '../../contexts/api.context';
import {useUserContext} from '../../contexts/user.context';
import {useScoreboardContext} from '../../contexts/scoreboard.context';

interface ScoreBoardPageProps {}

const ScoreboardPage: React.FC<ScoreBoardPageProps> = () => {
    const {gameId} = useParams();
    const {REST_API} = useAPIContext();
    const {token, setLoading, loading} = useUserContext();
    const {setTeam1, setTeam2} = useScoreboardContext();
    const navigate = useNavigate();

    useEffect(() => {
      const fetchScoreboard = () => {
        setLoading!(true);
        axios.post(`${REST_API}/scoreboard/get_score`, {gameId}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({data}) => {
          setLoading!(false);
          setTeam1!(data.team1);
          setTeam2!(data.team2);
        })
        .catch(() => setLoading!(false));;
      };
      setLoading!(true);
      axios.post(`${REST_API}/users/check_game`, {gameId}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({data}) => {
        setLoading!(false);
        const {canShow} = data;
        if (!canShow) navigate('../profile', {replace: true});
        else fetchScoreboard();
      })
      .catch(() => setLoading!(false));
    }, []);

    return (
      <ScoreboardContainer>
        {loading && <BlockLoader />}
        <GameIdSection>
          <CaptionText>{gameId}</CaptionText>
        </GameIdSection>
        <TitleText>Pirate Land</TitleText>
        <CaptionText>Scoreboard</CaptionText>
        <TeamsContainer>
            <TeamScoreboard teamName="Team 1" variant={1} />
            <VrtclLn />
            <TeamScoreboard teamName="Team 2" variant={2} />
        </TeamsContainer>
      </ScoreboardContainer>
    );
};

export default ScoreboardPage;
