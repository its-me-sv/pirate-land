import React from 'react';
import axios from 'axios';

import {Title} from '../home/styles';
import Button from '../../components/button';
import RoomsForm from '../../components/rooms-form';
import UpdateForm from '../../components/update-form';
import GamesRecord from "../../components/games-record";
import BlockLoader from '../../components/block-loader';

import {useAPIContext} from '../../contexts/api.context';
import {useUserContext} from '../../contexts/user.context';

import {
  ProfileContainer,
  ContentContainer,
  LogoutSection,
} from './styles';

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
    const {REST_API} = useAPIContext();
    const {token, setId, setToken, setLoading, loading} = useUserContext();
    
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
