import { TimeFormat } from '../types/types';

export const convertTime = (timeInSeconds: number) => {
  return <TimeFormat>{
    minutes: Math.floor(timeInSeconds / 60),
    seconds: timeInSeconds % 60,
  };
};

export const convertTimeToFormat = ({ minutes, seconds }: TimeFormat) => {
  return minutes * 60 + seconds;
};
