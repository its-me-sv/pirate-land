import React from 'react';

import {BoardFooter, ScoreBoard, ScoreText, VrtclLn} from '../../pages/island/styles';
import TeamPlayers from '../team-players';

import {useScoreboardContext} from '../../contexts/scoreboard.context';

interface PlayFooterProps {};

const PlayFooter: React.FC<PlayFooterProps> = () => {
    const {team1, team2} = useScoreboardContext();
    return (
      <BoardFooter>
        <TeamPlayers team={1} />
        <ScoreBoard>
          <ScoreText variant={1}>
            {team1.reduce((init, val) => init = init + val.captures, 0)}
          </ScoreText>
          <VrtclLn />
          <ScoreText variant={2}>
            {team2.reduce((init, val) => init = init + val.captures, 0)}
          </ScoreText>
        </ScoreBoard>
        <TeamPlayers team={2} />
      </BoardFooter>
    );
};

export default PlayFooter;
