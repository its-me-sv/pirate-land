import React, {useEffect} from 'react';
import axios from 'axios';

import LoginForm from '../../components/login-form';
import RegisterForm from '../../components/register-form';
import BlockLoader from '../../components/block-loader';

import {HomeContainer, Title, VerticalLine, FormContainer} from './styles';
import {useUserContext} from '../../contexts/user.context'; 
import {useAPIContext} from '../../contexts/api.context';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    const {REST_API} = useAPIContext();
    const {loading, setLoading} = useUserContext();

    // to ensure that the api is running
    // or to wake up the api
    useEffect(() => {
        setLoading!(true);
        axios.get(`${REST_API}/validation/server`)
        .then(() => setLoading!(false))
        .catch(() => setLoading!(false));
    }, []);
    
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
