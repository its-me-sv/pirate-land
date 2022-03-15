import React, {useState, useEffect} from 'react';
import {format} from 'timeago.js';
import axios from 'axios';

import {MessageContainer, Sender, Time, Msg, VrtclLn} from './styles';
import {getDateObj} from '../../utils/timeuuid-to-date';

import {useAPIContext} from '../../contexts/api.context';
import {useUserContext} from '../../contexts/user.context';

interface MessageProps {
  id: string;
  message: string;
  sender_id: string;
}

const Message: React.FC<MessageProps> = ({id, message, sender_id}) => {
    const {REST_API} = useAPIContext();
    const {token} = useUserContext();
    const [name, setName] = useState<string>('-------');
    useEffect(() => {
      axios.post(`${REST_API}/users/name`, {userId: sender_id}, {
        headers: {Authorization: `Bearer ${token}`},
      }).then(({data}) => setName(data.name))
      .catch(console.log);
    }, []);
    
    return (
      <MessageContainer>
        <Sender>{name}</Sender>
        <Time>{format(id)}</Time>
        <Msg>{message}</Msg>
        <VrtclLn />
      </MessageContainer>
    );
};

export default Message;
