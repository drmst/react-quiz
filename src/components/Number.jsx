import React, { useState } from "react";

const Number = ({ questions,setCorrectAnswerForNumber }) => {
  const [answer, setAnswer] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    if (answer==6) {
      setCorrectAnswerForNumber(1)
    } else{
      setCorrectAnswerForNumber(0);
    }
  };

  return (
    <React.Fragment>
      <p>Soru:{questions[0].question}</p>
      <label htmlFor="number">
        <input
          type="number"
          id="number"
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

export default Number;
