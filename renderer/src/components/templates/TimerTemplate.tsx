import React from 'react';
import styled from 'styled-components';

import { useTimerContainer } from '../../containers/useTimerContainer';
import Timer from '../Timer';

export const TimerTemplate: React.FC = () => {
  const { timer, startTimer, stopTimer } = useTimerContainer();
  return (
    <Container>
      <TimerWrapper>
        <Timer hour={timer.hour} minute={timer.minute} second={timer.second} />
      </TimerWrapper>
      <ActionButtonContainer>
        <ButtonWrapper>
          <Button onClick={startTimer}>시작</Button>
        </ButtonWrapper>
        <Button onClick={stopTimer}>멈추기</Button>
      </ActionButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #000;
  color: #fefefe;
  padding: 24px;
`;

const TimerWrapper = styled.div`
  margin-bottom: 24px;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px 12px;
  background-color: white;
  border: 1px solid white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 3px;
`;
