import "./ShowAnswer.css";

function ShowAnswer(props) {
 
  return (
    <div className="showAnswerForm">
      Answer:&nbsp;
      {props.answer}
    </div>
  );
}

export default ShowAnswer;
