import React from 'react';
import styled from 'styled-components';

import sendIcon from "../../assets/icons/send.png";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e8a57b;
  border-radius: 1px;
  gap: 0.1rem;
  padding: 0.1rem;
  &:focus-within {
    border: 2px solid rgb(41, 40, 40);
  }
`;

const InputBox = styled.textarea.attrs({
  placeholder: "Message...",
})`
  width: 100%;
  background-color: #e8a57b;
  border: none;
  font-family: bahnschrift;
  font-size: 2.1vh;
  opacity: 0.9;
  resize: none;
  &:focus {
    border: none;
    outline: none;
  }
`;

const SendIcon = styled.img.attrs({
  src: sendIcon,
  alt: "",
})`
  width: 14%;
  height: auto;
  cursor: pointer;
`;

interface MessageInputProps {}

const MessageInput: React.FC<MessageInputProps> = () => {
    return (
      <InputContainer>
        <InputBox />
        <SendIcon />
      </InputContainer>
    );
};

export default MessageInput;
