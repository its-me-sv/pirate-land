import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sender = styled.span`
  font-family: calibri;
  font-size: 1.4rem;
`;

const Time = styled.span`
  font-family: bahnschrift;
  font-size: 0.7rem;
`;

const Msg = styled.span`
  font-family: calibri;
  font-size: 1rem;
`;

const VrtclLn = styled.span`
  border-bottom: 1px solid black;
  opacity: 0.7;
`;

interface MessageProps {}

const Message: React.FC<MessageProps> = () => {
    return (
      <MessageContainer>
        <Sender>Suraj</Sender>
        <Time>2 mins ago</Time>
        <Msg>Hey there guys place it there and it must work excellent</Msg>
        <VrtclLn />
      </MessageContainer>
    );
};

export default Message;
