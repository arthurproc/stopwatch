import React, { FC } from 'react';

import { Container, TimerElement, TimerElementRight, TimerElementSplit } from '../styles/StyledComponents';
import { TimeFormat } from '../types/types';

type TimerDisplay = {
  remainingTime: TimeFormat;
  totalTimeInSeconds: number;
  timerToggle: () => void;
};

const TimerDisplay: FC<TimerDisplay> = ({ remainingTime, timerToggle }) => {
  return (
    <Container onClick={() => timerToggle()} title="Aperte para Pausar ou Iniciar">
      <TimerElement>
        <span>{remainingTime.minutes.toString().padStart(2, '0').substring(1, 0)}</span>
      </TimerElement>
      <TimerElementRight>
        <span>{remainingTime.minutes.toString().padStart(2, '0').substring(2, 1)}</span>
      </TimerElementRight>
      <TimerElementSplit>
        <span>:</span>
      </TimerElementSplit>
      <TimerElement>
        <span>{remainingTime.seconds.toString().padStart(2, '0').substring(1, 0)}</span>
      </TimerElement>
      <TimerElementRight>
        <span>{remainingTime.seconds.toString().padStart(2, '0').substring(2, 1)}</span>
      </TimerElementRight>
    </Container>
  );
};

export default TimerDisplay;
