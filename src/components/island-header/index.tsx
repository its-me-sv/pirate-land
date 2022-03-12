import React from 'react';
import styled from 'styled-components';

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
    return (
      <Header>
        <HeaderText>{gameId}</HeaderText>
        <TitleText>Pirate Land</TitleText>
        <HeaderText>{1}'s chance</HeaderText>
      </Header>
    );
};

export default IslandHeader;
