import React, { useState } from "react";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div className="exercise-container">
      <h1>{name}</h1>
      <p>Current Reps: {count}</p>
      <div className="button-group">
        <div className="button-wrapper">
          <button onClick={() => setCount(count + 1)}>+</button>
          <p>Increase Reps</p>
        </div>
        <div className="button-wrapper">
          <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
          <p>Decrease Reps</p>
        </div>
      </div>
      <div className="reset-button-wrapper">
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default RepetitionExercise;
