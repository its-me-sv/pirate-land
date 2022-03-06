import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import LoginForm from '../../components/login-form';
import RegisterForm from '../../components/register-form';
import BlockLoader from '../../components/block-loader';

import {HomeContainer, Title, VerticalLine, FormContainer} from './styles';
import {useUserContext} from '../../contexts/user.context'; 

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    const navigate = useNavigate();
    const {loading, id} = useUserContext();

    useEffect(() => {
        if (id.length) navigate('./profile');
    }, [id, navigate]);

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
