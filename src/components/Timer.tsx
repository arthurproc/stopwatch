import React, { FC, useEffect, useState } from 'react';

import { convertTime } from '../utils/util';

import { ControlButtons, ContainerRow } from '../styles/StyledComponents';

import ProgressBar from './ProgressBar';
import TimerDisplay from './TimerDisplay';

export type TimerProps = {
  initialTime: number;
};
const Timer: FC<TimerProps> = ({ initialTime }) => {
  const [endTime, setEndTime] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    let intervalId: number;

    if (isRunning && remainingTime > 0) {
      intervalId = setInterval(() => {
        const now = Math.floor(Date.now() / 1000);
        const timeLeft = endTime! - now;

        if (timeLeft > 0) {
          setRemainingTime(timeLeft);
        } else {
          setRemainingTime(0);
          setIsRunning(false);
        }
      }, 100);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, endTime, remainingTime]);

  const startStopwatch = () => {
    if (!isRunning) {
      const now = Math.floor(Date.now() / 1000);
      setEndTime(now + remainingTime);
      setIsRunning(true);
    }
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setEndTime(null);
    setRemainingTime(initialTime);
    setIsRunning(false);
  };

  return (
    <>
      <div>
        <TimerDisplay
          remainingTime={convertTime(remainingTime)}
          totalTimeInSeconds={initialTime}
        />
      </div>
      <ContainerRow>
        <ProgressBar value={remainingTime} max={initialTime} />
      </ContainerRow>
      <ContainerRow>
        <ControlButtons onClick={startStopwatch}>Start</ControlButtons>
        <ControlButtons onClick={stopStopwatch}>Stop</ControlButtons>
        <ControlButtons onClick={resetStopwatch}>Reset</ControlButtons>
      </ContainerRow>
    </>
  );
};

export default Timer;
