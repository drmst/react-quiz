import React, { useState } from "react";

const Text = ({ questions, setCorrectAnswerForText }) => {
  const [answer, setAnswer] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === "afrika") {
      setCorrectAnswerForText(1);
    } else {
      setCorrectAnswerForText(0);
    }
  };
  return (
    <React.Fragment>
      <p>Soru: {questions[3].question}</p>
      <label htmlFor="text">
        <input
          type="text"
          name="text"
          id="text"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
      </label>
      <button onClick={handleClick}>Gönder</button>
      <hr />
    </React.Fragment>
  );
};

export default Text;
