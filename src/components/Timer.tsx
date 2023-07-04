import React, { FC, useEffect, useState } from 'react';

import { convertTime } from '../utils/util';

import { TimeFormat, TimerProps } from '../types/types';

const Timer: FC<TimerProps> = ({ timeInSeconds }) => {
  const [currentTime, setCurrentTime] = useState<TimeFormat>(
    convertTime(timeInSeconds),
  );
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeInSeconds > 0) {
        timeInSeconds -= 1;
        setCurrentTime(convertTime(timeInSeconds));
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timeInSeconds]);

  return (
    <>
      <div>
        <section>{`${currentTime.minutes} minutes`}</section>
        <section>{`${currentTime.seconds} seconds`}</section>
      </div>
      <button onClick={() => handleStopContinue()}>parar/continuar</button>
    </>
  );
};

export default Timer;
