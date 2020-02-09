import React from 'react';
import styled from 'styled-components';

import { makeTwoLengthToNumber } from '../utils/StringUtil';

interface Props {
  hour: number;
  minute: number;
  second: number;
}

const Timer: React.FC<Props> = props => {
  return (
    <Container>
      <Time>{makeTwoLengthToNumber(props.hour)}</Time>
      <Conlon>:</Conlon>
      <Time>{makeTwoLengthToNumber(props.minute)}</Time>
      <Conlon>:</Conlon>
      <Time>{makeTwoLengthToNumber(props.second)}</Time>
    </Container>
  );
};

export default React.memo(Timer);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Time = styled.span`
  font-size: 32px;
  font-weight: bold;
`;

const Conlon = styled.span`
  font-size: 32px;
  font-weight: bold;
  margin: 0 4px;
`;
