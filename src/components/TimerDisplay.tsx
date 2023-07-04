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
};

const TimerDisplay: FC<TimerDisplay> = ({
  remainingTime,
  totalTimeInSeconds,
}) => {
  return (
    <Container>
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
        <span>:</span>
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
