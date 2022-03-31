import "./ShowAnswer.css";

function ShowAnswer(props) {
  console.log(props.answer);
  return (
    <div className="showAnswerForm">
      Answer:&nbsp;
      {props.answer}
    </div>
  );
}

export default ShowAnswer;
