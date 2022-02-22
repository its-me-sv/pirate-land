import React, {useState} from 'react';
import styled from 'styled-components';

import Input from '../input';
import Button from '../button';
import {ColTitle} from '../rooms-form';

const AccountsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`;

interface UpdateFormProps {}

const UpdateForm: React.FC<UpdateFormProps> = () => {
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onUpdate = () => {
        window.alert(JSON.stringify({name, username, password}));
    };

    return (
      <AccountsContainer>
        <ColTitle>Update Account</ColTitle>
        <Input label="Name" name="name" value={name} setValue={setName} />
        <Input
          label="Username"
          name="username"
          value={username}
          setValue={setUsername}
        />
        <Input
          label="Password"
          name="password"
          value={password}
          setValue={setPassword}
          isPass
        />
        <Button variant={2} text="Update" onPress={onUpdate} />
      </AccountsContainer>
    );
};

export default UpdateForm;
