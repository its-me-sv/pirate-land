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

import {GameIdSection} from './styles';

import {useAPIContext} from '../../contexts/api.context';
import {useUserContext} from '../../contexts/user.context';

interface ScoreBoardPageProps {}

const ScoreboardPage: React.FC<ScoreBoardPageProps> = () => {
    const {gameId} = useParams();
    const {REST_API} = useAPIContext();
    const {token, setLoading} = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
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
      })
      .catch(() => setLoading!(false));
    }, []);

    return (
      <ScoreboardContainer>
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
