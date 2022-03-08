import React from 'react';
import styled from 'styled-components';

import prettyDate from '../../utils/pretty-date';

export const RecordText = styled.div`
  font-family: bahnschrift;
  cursor: pointer;
  opacity: 0.84;
  display: flex;
  gap: 2.1rem;
  font-size: 0.8rem;
  &:hover {
    color: green;
  }
`;

export const Hrzntl = styled.div`
  border-top: 2px solid black;
  opacity: 0.6;
`;

interface RecordItemProps {
    time: string;
    id: string;
};

const RecordItem: React.FC<RecordItemProps> = ({time, id}) => {
    return (
      <>
        <RecordText>
          <span>{prettyDate(time)}</span>
          <span>{id}</span>
        </RecordText>
        <Hrzntl />
      </>
    );
};

export default RecordItem;
