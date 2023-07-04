import React, { FC, useEffect, useState } from 'react';

import { convertTime, convertTimeFormatToSeconds } from '../utils/util';

import { Play } from '@phosphor-icons/react';

import {
  ControlButtons,
  ContainerRow,
  TimerContainer,
  InputRow,
  BlurredContent,
  PlayButton,
} from '../styles/StyledComponents';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

import ProgressBar from './ProgressBar';
import TimerDisplay from './TimerDisplay';

type TimerProps = {
  isDarkMode: boolean;
};
const Timer: FC<TimerProps> = ({ isDarkMode }) => {
  const [standardTime, setStandardTime] = useState(60 * 5);
  const [endTime, setEndTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(standardTime);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [timerInput, setTimerInput] = useState('');
  const alarmSound = new Audio(
    'https://cdn.videvo.net/videvo_files/audio/premium/audio0053/watermarked/CLOCK-TIMER_GEN-HDF-07733_preview.mp3',
  );
  alarmSound.loop = false;
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
    } else if (remainingTime === 0 && !isRunning) {
      const alarmSound = new Audio(
        'https://cdn.videvo.net/videvo_files/audio/premium/audio0053/watermarked/CLOCK-TIMER_GEN-HDF-07733_preview.mp3',
      );
      alarmSound.loop = false;
      alarmSound.play();
      setTimeout(() => {
        alarmSound.pause();
      }, 2500);
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
    } else if (isRunning && remainingTime > 0) {
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    setEndTime(0);
    setRemainingTime(standardTime);
    setIsRunning(false);
  };
  const onChangeTimerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const timerRegex = /^([0-5]?\d)(m|s)$|^([0-5]?\d)m([0-5]?\d)s$/gm;
    if (e.target.value.match(timerRegex)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
    setTimerInput(e.target.value);
  };

  const setNewTimer = () => {
    const regexTime = /^([0-5]?\d)(m|s)$|^([0-5]?\d)m([0-5]?\d)s$/gm;
    let minutes = 0;
    let seconds = 0;

    const regexGroups = regexTime.exec(timerInput) ?? [];
    const group1 = parseInt(regexGroups[1]) ?? 0; // Apenas M ou S, valor do campo
    const group2 = regexGroups[2] ?? undefined; // diz se m ou s
    const group3 = parseInt(regexGroups[3]) ?? 0; //minutos se campo completo
    const group4 = parseInt(regexGroups[4]) ?? 0; //segundos se campo completo

    if (group2) {
      group2 === 'm' ? (minutes = group1) : (seconds = group1);
    } else {
      minutes = group3;
      seconds = group4;
    }
    const timeInSeconds: number = convertTimeFormatToSeconds({
      minutes,
      seconds,
    });
    setIsRunning(false);
    setStandardTime(timeInSeconds);
    setEndTime(timeInSeconds);
    setRemainingTime(timeInSeconds);
    setTimerInput('');
    setButtonDisabled(true);
  };

  const setFixedMinutes = (timeInSeconds: number) => {
    setIsRunning(false);
    setStandardTime(timeInSeconds);
    setEndTime((timeInSeconds) => timeInSeconds + 60);
    setRemainingTime(timeInSeconds);
  };

  const addMinute = async () => {
    setStandardTime((timeInSeconds) => timeInSeconds + 60);
    setEndTime((timeInSeconds) => timeInSeconds + 60);
    setRemainingTime((timeInSeconds) => timeInSeconds + 60);
  };

  const removeMinute = () => {
    if (remainingTime - 60 >= 0) {
      setStandardTime((timeInSeconds) => timeInSeconds - 60);
      setEndTime((timeInSeconds) => timeInSeconds - 60);
      setRemainingTime((timeInSeconds) => timeInSeconds - 60);
    }
  };

  return (
    <TimerContainer>
      <BlurredContent about={!isRunning ? 'blurred' : 'notBlur'}>
        <TimerDisplay
          timerToggle={toggleTimer}
          remainingTime={convertTime(remainingTime)}
          totalTimeInSeconds={standardTime}
        />
        <ProgressBar value={remainingTime} max={standardTime} />
      </BlurredContent>

      {!isRunning && (
        <PlayButton>
          <Play
            size={90}
            onClick={toggleTimer}
            weight="fill"
            color={isDarkMode ? dark.colors.primaryText : light.colors.primaryText}
          />
        </PlayButton>
      )}

      <InputRow>
        <input
          type="text"
          name="timerInput"
          value={timerInput}
          placeholder="Ex.: 3m25s"
          onChange={onChangeTimerInput}
        />
        <button disabled={buttonDisabled} onClick={setNewTimer}>
          Definir Tempo
        </button>
      </InputRow>
      <ContainerRow>
        <ControlButtons onClick={resetTimer}>Reset</ControlButtons>
        <ControlButtons onClick={() => setFixedMinutes(60 * 5)}>5min</ControlButtons>
        <ControlButtons onClick={() => setFixedMinutes(60 * 10)}>10min</ControlButtons>
        <ControlButtons onClick={() => addMinute()}> +1 min </ControlButtons>
        <ControlButtons onClick={() => removeMinute()}> -1 min </ControlButtons>
      </ContainerRow>
    </TimerContainer>
  );
};

export default Timer;
