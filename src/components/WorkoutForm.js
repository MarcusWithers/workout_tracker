import React, { useState } from "react";

const WorkoutForm = (props) => {
  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");

  const exerciseHandler = (event) => {
    setExercise(event.target.value);
  };

  const repsHandler = (event) => {
    setReps(event.target.value);
  };

  const setsHandler = (event) => {
    setSets(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setExercise("");
    setReps("");
    setSets("");
    const workout = {
      exercise: exercise,
      reps: reps,
      sets: sets,
    };
    props.submissionHandler(workout);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={exerciseHandler}
        />
        <br />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={repsHandler}
        />
        <br />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={setsHandler}
        />
        <br />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default WorkoutForm;
