import React from 'react';
import styled from 'styled-components';

import LoginForm from '../components/login-form';
import RegisterForm from '../components/register-form';

const HomeContainer = styled.div`
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.span`
  font-family: 'PirateKids';
  font-size: 12vh;
  color: #e61d30;
  -webkit-text-stroke-width: 2.8px;
  -webkit-text-stroke-color: #354b7d;
`;

const FormContainer = styled.div`
  display: flex;
`;

const VerticalLine = styled.span`
  border-left: 3px solid #354b7d;
  border-radius: 2rem;
`;

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
