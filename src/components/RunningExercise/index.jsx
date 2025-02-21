import React, { useState, useEffect } from "react";

function RunningExercise({ name }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime((prev) => prev + 0.01), 10); // Update every 10ms
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    const hundredths = Math.floor((time * 100) % 100).toString().padStart(2, "0");
    return `${minutes}:${seconds}.${hundredths}`;
  };

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, formatTime()]);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  return (
    <div className="exercise-container">
      <h1>{name}</h1>
      <p className="stopwatch">{formatTime()}</p>
      <div className="button-group">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button onClick={handleLap}>Lap</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div className="laps">
        <h2>Laps</h2>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>Lap {index + 1}: {lap}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RunningExercise;
