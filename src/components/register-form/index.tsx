import React, {useState} from 'react';
import styled from 'styled-components';

import Input from '../input';
import Button from '../button';

const RegisterContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`;

const FormTitle = styled.span`
  font-family: 'calibri';
  font-size: 4.9vh;
  opacity: 0.84;
`;

interface LoginFormProps {}

const RegisterForm: React.FC<LoginFormProps> = () => {
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const onRegister = () => {
      window.alert(JSON.stringify({name, username, password}));
    };

    return (
        <RegisterContainer>
          <FormTitle>Register</FormTitle>
          <Input value={name} setValue={setName} label='Name' name='name' />
          <Input value={username} setValue={setUsername} label='Username' name='username' />
          <Input value={password} setValue={setPassword} label='Password' name='password' />
          <Button onPress={onRegister} text='Create' variant={2} />
        </RegisterContainer>
    );
};

export default RegisterForm;
