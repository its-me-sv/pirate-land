import React from 'react';
import styled from 'styled-components';

import {Title} from './home.page';
import Button from '../components/button';
import RoomsForm from '../components/rooms-form';
import UpdateForm from '../components/update-form';
import GamesRecord from "../components/games-record";

const ProfileContainer = styled.div`
  margin-top: 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
`;

export const LogoutSection = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
`;

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
    const logoutUser = () => {
        window.alert("user logout");
    };

    return (
      <ProfileContainer>
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
