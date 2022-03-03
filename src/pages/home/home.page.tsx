import React from 'react';

import LoginForm from '../../components/login-form';
import RegisterForm from '../../components/register-form';

import {HomeContainer, Title, VerticalLine, FormContainer} from './styles';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    return (
        <HomeContainer>
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
