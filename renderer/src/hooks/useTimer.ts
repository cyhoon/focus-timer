import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useState } from 'react';

export function useTimer() {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [timerID, setTimerID] = useState<number | null>(null);

  const startTimer = useCallback(() => {
    if (timerID) {
      const id = setInterval(() => {
        setCurrentTime(dayjs());
      }, 1000);

      setTimerID(id);
      return;
    }

    setStartTime(dayjs());
    const id = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    setTimerID(id);
  }, [setTimerID]);

  const stopTimer = useCallback(() => {
    if (timerID) {
      console.log("timerID: ", timerID);
      clearInterval(timerID);
    }
  }, [timerID]);

  if (!startTime) {
    return {
      timer: {
        hour: 0,
        minute: 0,
        second: 0
      },
      startTimer,
      stopTimer
    };
  }

  const hour = currentTime.diff(startTime, "hour") % 24;
  const minute = currentTime.diff(startTime, "minute") % 60;
  const second =
    currentTime.diff(startTime, "second") % 60 > 0
      ? currentTime.diff(startTime, "second") % 60
      : 0;

  return {
    timer: {
      hour,
      minute,
      second
    },
    startTimer,
    stopTimer
  };
}
