import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import {BoardFooter, ScoreBoard, ScoreText, VrtclLn} from '../../pages/island/styles';
import TeamPlayers from '../team-players';

import {useScoreboardContext} from '../../contexts/scoreboard.context';
import {useLobbyContext} from '../../contexts/lobby.context';
import {useAPIContext} from '../../contexts/api.context';
import {useUserContext} from '../../contexts/user.context';

interface PlayFooterProps {
  gameId: string;
};

const PlayFooter: React.FC<PlayFooterProps> = ({gameId}) => {
    const {team1, team2} = useScoreboardContext();
    const {team1: t1p, team2: t2p, creator} = useLobbyContext();
    const {REST_API} = useAPIContext();
    const {token, id} = useUserContext();
    const navigate = useNavigate();
    const team1Score = team1.reduce((init, val) => init = init + val.captures, 0);
    const team2Score = team2.reduce((init, val) => init = init + val.captures, 0);
    useEffect(() => {
      if (team1Score >= (t2p.length * 3) || team2Score >= (t1p.length * 3)) {
        const headers = {Authorization: `Bearer ${token}`};
        if (creator === id) {
          axios.put(`${REST_API}/games/finish_game`, {gameId}, {headers});
        }
        axios.put(`${REST_API}/users/set_last_game`, {gameId}, {headers})
        .then(() => navigate(`../island/${gameId}/scoreboard`));
      }
    }, [team1Score, team2Score]);
    return (
      <BoardFooter>
        <TeamPlayers team={1} />
        <ScoreBoard>
          <ScoreText variant={1}>
            {team1Score}
          </ScoreText>
          <VrtclLn />
          <ScoreText variant={2}>
            {team2Score}
          </ScoreText>
        </ScoreBoard>
        <TeamPlayers team={2} />
      </BoardFooter>
    );
};

export default PlayFooter;
