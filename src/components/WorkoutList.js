import React from "react";
import "../styles.css";
const WorkoutList = (props) => {
  return props.workouts.map((workout, index) => {
    return (
      <ul className="workoutlist">
        <li key={index}>
          <h1>{workout.exercise}</h1>
          <h2>Reps: {workout.reps}</h2>
          <h2>Sets: {workout.sets}</h2>
        </li>
      </ul>
    );
  });
};

export default WorkoutList;
