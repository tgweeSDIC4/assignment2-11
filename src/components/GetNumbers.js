import { useState } from "react";
import "./GetNumbers.css";

function GetNumbers(props) {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  function handleInput(event) {
    let inputField = event.target.name;
    switch (inputField) {
      case "numberOne":
        setNumberOne(event.target.value);
        break;
      case "numberTwo":
        setNumberTwo(event.target.value);
        break;
    }
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    let addNumbers = parseFloat(numberOne) + parseFloat(numberTwo);
    props.handleAnswer(addNumbers);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      First Number:
      <input
        type="number"
        name="numberOne"
        onChange={handleInput}
        id="numberOne"
        placeholder="0"
      />
      <br />
      Second Number:
      <input
        type="number"
        name="numberTwo"
        placeholder="0"
        onChange={handleInput}
      />
      <button id="addBtn">Add and Show Answer</button>
    </form>
  );
}

export default GetNumbers;
