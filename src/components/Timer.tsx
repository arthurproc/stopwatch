import React, { FC, useEffect, useState } from 'react';

import { convertTime } from '../utils/util';

import {
  ControlButtons,
  ContainerRow,
  TimerContainer,
} from '../styles/StyledComponents';

import ProgressBar from './ProgressBar';
import TimerDisplay from './TimerDisplay';

export type TimerProps = {
  initialTime: number;
};
const Timer: FC<TimerProps> = ({ initialTime }) => {
  const [endTime, setEndTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [timerInput, setTimerInput] = useState('');

  useEffect(() => {
    let intervalId: number;

    if (isRunning && remainingTime > 0) {
      intervalId = setInterval(() => {
        const now = Math.floor(Date.now() / 1000);
        const timeLeft = endTime - now;

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

  const toggleTimer = () => {
    if (!isRunning) {
      const now = Math.floor(Date.now() / 1000);
      setEndTime(now + remainingTime);
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    setEndTime(0);
    setRemainingTime(initialTime);
    setIsRunning(false);
  };
  const onChangeTimerInput = (e: React<HTMLInputElement>) => {
    const timerRegex = /^(?:[0-5]?\d)(?:m|s)$|^(?:[0-5]?\d)m(?:[0-5]?\d)s$/gm;
    if (e.target.value.match(timerRegex)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
    setTimerInput(e.target.value);
  };

  const setNewTimer = () => {
    const regexTime = /^([0-5]?\d)(m|s)$|^([0-5]?\d)m([0-5]?\d)s$/gm;
    setEndTime(0);
    setIsRunning(true);
    let minutes: number;
    let seconds: number;
    const regexGroups = regexTime.exec(timerInput) ?? [];
    const group1 = parseInt(regexGroups[1]) ?? 0; // Apenas M ou S, valor do campo
    const group2 = regexGroups[2] ?? undefined; // diz se m ou s
    const group3 = parseInt(regexGroups[3]) ?? 0; //minutos se campo completo
    const group4 = parseInt(regexGroups[4]) ?? 0; //segundos se campo completo
    if (group2) {
      group2 === 'm' ? (minutes = group1 * 60) : (seconds = group1);
    }
  };
  return (
    <TimerContainer>
      <TimerDisplay
        timerToggle={toggleTimer}
        remainingTime={convertTime(remainingTime)}
        totalTimeInSeconds={initialTime}
      />
      <ContainerRow>
        <ProgressBar value={remainingTime} max={initialTime} />
      </ContainerRow>
      <div>
        <input
          type="text"
          name="timerInput"
          value={timerInput}
          placeholder="Ex.: 3m25s"
          onChange={onChangeTimerInput}
        />
        <button disabled={buttonDisabled} onClick={setNewTimer}>
          Iniciar
        </button>
      </div>
      <ContainerRow>
        <ControlButtons onClick={resetTimer}>Reset</ControlButtons>
      </ContainerRow>
    </TimerContainer>
  );
};

export default Timer;
