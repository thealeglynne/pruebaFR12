import React, { useState, useEffect } from 'react';

function Timer({ initialTime, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
        if (onTimeUp) {
          onTimeUp();
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return <div>Tiempo restante: {formatTime(timeLeft)}</div>;
}

export default Timer;
