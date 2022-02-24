import React from 'react';
import styled from 'styled-components';

import Message from '../message';
import MessageInput from '../message-input';

const ChatsContainer = styled.div<{variant: number}>`
  border: 3px solid ${(props) => (props.variant === 1 ? `#2e66df` : `#fe0002`)};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
`;

const ChatsTitle = styled.span<{variant: number}>`
  font-family: calibri;
  font-size: 3.6vh;
  color: ${(props) => (props.variant === 1 ? `#2e66df` : `#fe0002`)};
  text-align: center;
`;

const MessagesContainer = styled.div`
  padding: 0px 6px;
  overflow-y: scroll;
  max-height: 80vh;
`;

interface ChatContainerProps {
    title: string;
    variant: number;
}

const ChatContainer: React.FC<ChatContainerProps> = ({title, variant}) => {
    return (
      <ChatsContainer variant={variant}>
        <ChatsTitle variant={variant}>{title}</ChatsTitle>
        <MessagesContainer>
          {[...Array(84)].map((_, idx) => (
            <Message key={idx} />
          ))}
        </MessagesContainer>
        <MessageInput />
      </ChatsContainer>
    );
};

export default ChatContainer;
