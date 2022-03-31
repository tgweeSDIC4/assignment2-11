import { useState } from "react";
import GetNumbers from "../components/GetNumbers";
import ShowAnswer from "../components/ShowAnswer";
import "./StartScreen.css";
import config from "../config"

function StartScreen() {
  const [answer, setAnswer] = useState(0);

  function handleAnswer(addNumbers) {
    setAnswer(addNumbers);
  }

  return (
    <div className="startingDisplay">
      <h3>Input two Integers to be added</h3>
      <hr />
      <GetNumbers handleAnswer={handleAnswer} />
      <ShowAnswer answer={answer} />
      <br/>
      <div>BaseURL: {config.baseURL} </div>
    </div>
  );
}

export default StartScreen;
