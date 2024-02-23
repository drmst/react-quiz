import React from "react";

const Radio = ({ questions }) => {
  return (
    <React.Fragment>
      <p>Soru:{questions[2].question} </p>
      {questions[2].answers.map((answer) => (
        <React.Fragment key={answer.id}>
          <input type="radio" name="radio" id={answer.id} />
          <label htmlFor={answer.id}>{answer.answer}</label>
        </React.Fragment>
      ))}
           <hr />
    </React.Fragment>
  );
};

export default Radio;
