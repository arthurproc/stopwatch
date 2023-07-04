import { TimeFormat } from '../types/types';

export const convertTime = (timeFromDateNow: number) => {
  return <TimeFormat>{
    minutes: Math.floor(timeFromDateNow / 60),
    seconds: timeFromDateNow % 60,
  };
};

export const convertTimeFormatToSeconds = ({
  minutes = 0,
  seconds = 0,
}: TimeFormat) => {
  return minutes * 60 + seconds;
};
