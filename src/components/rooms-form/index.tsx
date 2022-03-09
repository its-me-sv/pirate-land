import React, {useState} from 'react';
import styled from 'styled-components';

import Input from '../input';
import Button from '../button';

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`;

export const ColTitle = styled.span`
  font-family: calibri;
  font-size: 4.2vh;
  opacity: 0.84;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
`;

interface RoomsFormProps {}

const RoomsForm: React.FC<RoomsFormProps> = () => {
    const [roomId, setRoomId] = useState<string>('');

    const onJoin = () => {
      if (!roomId.length) return;
      window.alert(roomId);
    };
    
    const onCreate = () => {
      window.alert(roomId);
    };

    return (
      <RoomContainer>
        <ColTitle>Islands</ColTitle>
        <Input
          label="Island ID"
          name="roomid"
          value={roomId}
          setValue={setRoomId}
        />
        <ButtonsContainer>
          <Button disabled={!roomId.length} text="Join Island" onPress={onJoin} />
          <Button
            text="Create Island"
            onPress={onCreate}
            variant={2}
          />
        </ButtonsContainer>
      </RoomContainer>
    );
};

export default RoomsForm;
