import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime((prevTime) => prevTime + 0.01), 10);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    const hundredths = Math.floor((time * 100) % 100).toString().padStart(2, "0");
    return `${minutes}:${seconds}.${hundredths}`;
  };

  return (
    <div className="exercise-container">
      <h1>{name}</h1>
      <p className="stopwatch">{formatTime()}</p>
      <div className="button-group">
        <div className="button-wrap">
          <button onClick={() => setIsRunning(true)}>Start</button>
        </div>
        <div className="button-wrap">
          <button onClick={() => setIsRunning(false)}>Stop</button>
        </div>
        <div className="button-wrap">
          <button onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default DurationExercise;


