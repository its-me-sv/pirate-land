import React from 'react';

import LoginForm from '../../components/login-form';
import RegisterForm from '../../components/register-form';
import BlockLoader from '../../components/block-loader';

import {HomeContainer, Title, VerticalLine, FormContainer} from './styles';
import {useUserContext} from '../../contexts/user.context'; 

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    const {loading} = useUserContext();
    
    return (
        <HomeContainer>
            {loading && <BlockLoader />}
            <Title>Pirate Land</Title>
            <FormContainer>
                <LoginForm />
                <VerticalLine />
                <RegisterForm />
            </FormContainer>
        </HomeContainer>
    );
};

export default HomePage;
