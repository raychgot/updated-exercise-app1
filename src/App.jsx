import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise"; 
import "./App.css";
import PushUpsIcon from "./assets/icons/push-ups.png";
import RunningIcon from "./assets/icons/running.png";
import PlankIcon from "./assets/icons/plank.png";

const exercises = [
  {
    name: "Push Ups",
    type: "repetition",
    description: "Get stronger with every rep",
    icon: PushUpsIcon,
  },
  {
    name: "Running",
    type: "running", // New type
    description: "Track your laps and time",
    icon: RunningIcon,
  },
  {
    name: "Plank",
    type: "duration",
    description: "Build core strength",
    icon: PlankIcon,
  },
];

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="app-container">
      {!selectedExercise ? (
        <div className="exercise-menu">
          <h1>Exercise Selection</h1>
          <div className="exercise-list">
            {exercises.map((exercise) => (
              <button
                key={exercise.name}
                className="exercise-button"
                onClick={() => setSelectedExercise(exercise)}
              >
                <img src={exercise.icon} alt={exercise.name} className="exercise-icon" />
                <div>
                  <strong>{exercise.name}</strong>
                  <p>{exercise.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="exercise-screen">
          {selectedExercise.type === "repetition" && (
            <RepetitionExercise name={selectedExercise.name} />
          )}
          {selectedExercise.type === "duration" && (
            <DurationExercise name={selectedExercise.name} />
          )}
          {selectedExercise.type === "running" && (
            <RunningExercise name={selectedExercise.name} />
          )}
          <button className="back-button" onClick={() => setSelectedExercise(null)}>
            Back to Exercises
          </button>
        </div>
      )}
    </div>
  );
}

export default App;


