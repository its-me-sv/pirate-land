import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {useAPIContext} from '../../contexts/api.context';
import {useUserContext} from '../../contexts/user.context';
import {usePlayContext} from '../../contexts/play.context';

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem 0.6rem;
`;

const HeaderText = styled.span`
  font-family: calibri;
  font-size: 3.6vh;
  opacity: 0.7;
`;

const TitleText = styled.span`
  font-family: "PirateKids";
  font-size: 6.3vh;
  color: #e61d30;
  -webkit-text-stroke-width: 2.1px;
  -webkit-text-stroke-color: #354b7d;
`;

interface IslandHeaderProps {
    gameId: string|undefined;
}

const IslandHeader: React.FC<IslandHeaderProps> = ({gameId}) => {
    const {REST_API} = useAPIContext();
    const {token} = useUserContext();
    const {currPlayer, players} = usePlayContext();
    const [username, setUsername] = useState<string>('-------');
    useEffect(() => {
      const playerId = players[currPlayer];
      if (!playerId?.length) return;
      axios.post(`${REST_API}/users/username`, {userId: playerId}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then(({data}) => setUsername(data.username));
    }, [currPlayer, players]);
    return (
      <Header>
        <HeaderText>{gameId}</HeaderText>
        <TitleText>Pirate Land</TitleText>
        <HeaderText>{username}'s chance</HeaderText>
      </Header>
    );
};

export default IslandHeader;
