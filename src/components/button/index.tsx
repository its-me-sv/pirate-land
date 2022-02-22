import React from 'react';
import styled from 'styled-components';

interface BtnProps {
    btnType: number;
}

const ButtonContainer = styled.div`
    font-family: 'PirateKids';
    cursor: pointer;
    padding: 0.4rem;
    font-size: 3vh;
    padding-top: 1px;
    padding-bottom: 1px;
    text-align: center;
    border-radius: 0.2rem;
    background-color: #e61d30;
    color: #354b7d;
    ${(props: BtnProps) => props.btnType === 2 && (
        `
          background-color: #354b7d;
          color: #e61d30;
        `
    )}
`;

interface ButtonProps {
    text: string;
    variant?: number;
    onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({text, variant = 1, onPress}) => {
    return (
        <ButtonContainer onClick={onPress} btnType={variant}>
          {text}
        </ButtonContainer>
    );
}

export default Button;
