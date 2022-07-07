import React, { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState([]);

  const submissionHandler = (workout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
  };
  console.log(workouts);

  return (
    <div className="App">
      <h1>We begin</h1>
      <WorkoutForm submissionHandler={submissionHandler} />
    </div>
  );
}

export default App;
