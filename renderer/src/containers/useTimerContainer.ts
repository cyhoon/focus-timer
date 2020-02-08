import React, { useState } from 'react';

import { notificationAPI } from '../api/notificationAPI';
import { useTimer } from '../hooks/useTimer';

export function useTimerContainer() {
  const { startTimer, stopTimer, timer } = useTimer();
  const [notificationMinute, setNotificationMinute] = useState(0);

  if (
    notificationMinute !== timer.minute &&
    timer.minute > 0 &&
    timer.minute % 1 === 0
  ) {
    notificationAPI.sendNotificiation(
      "포커스타이머",
      `${timer.minute}분이 경과됬습니다 🔥`
    );

    setNotificationMinute(timer.minute);
  }

  return {
    timer,
    startTimer,
    stopTimer
  };
}
