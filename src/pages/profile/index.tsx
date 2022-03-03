import React from 'react';

import {Title} from '../home/styles';
import Button from '../../components/button';
import RoomsForm from '../../components/rooms-form';
import UpdateForm from '../../components/update-form';
import GamesRecord from "../../components/games-record";

import {
  ProfileContainer,
  ContentContainer,
  LogoutSection,
} from './styles';

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
