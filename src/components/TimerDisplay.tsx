import React, { FC } from 'react';

import { convertTimeFormatToSeconds } from '../utils/util';

import {
  Container,
  TimerElement,
  TimerElementRight,
} from '../styles/StyledComponents';
import { TimeFormat } from '../types/types';

import ProgressBar from './ProgressBar';
type TimerDisplay = {
  remainingTime: TimeFormat;
  totalTimeInSeconds: number;
  timerToggle: () => void;
};

const TimerDisplay: FC<TimerDisplay> = ({
  remainingTime,
  totalTimeInSeconds,
  timerToggle,
}) => {
  return (
    <Container
      onClick={() => timerToggle()}
      title="Aperte para Pausar ou Iniciar"
    >
      <div>
        <TimerElement>
          <span>
            {remainingTime.minutes.toString().padStart(2, '0').substring(1, 0)}
          </span>
        </TimerElement>
        <TimerElementRight>
          <span>
            {remainingTime.minutes.toString().padStart(2, '0').substring(2, 1)}
          </span>
        </TimerElementRight>
        <TimerElement>
          <span>
            {remainingTime.seconds.toString().padStart(2, '0').substring(1, 0)}
          </span>
        </TimerElement>
        <TimerElementRight>
          <span>
            {remainingTime.seconds.toString().padStart(2, '0').substring(2, 1)}
          </span>
        </TimerElementRight>

        <ProgressBar
          value={convertTimeFormatToSeconds(remainingTime)}
          max={totalTimeInSeconds}
        />
      </div>
    </Container>
  );
};

export default TimerDisplay;
