import React from 'react';

import {RecordContainer, GamesHolder, RecordText, Hrzntl} from "./styles";
import {ColTitle} from '../rooms-form';

interface GamesRecordProps {}

const GamesRecord: React.FC<GamesRecordProps> = () => {
    return (
      <RecordContainer>
        <ColTitle>Games Record</ColTitle>
        <GamesHolder>
          {[...Array(200)].map(() => (
              <>
                <RecordText>
                  <span>22 Feb, 2022 - 09:32</span>
                  <span>AX231BCDFE</span>
                </RecordText>
              </>
            ))
          }
          <Hrzntl />
        </GamesHolder>
      </RecordContainer>
    );
};

export default GamesRecord;
