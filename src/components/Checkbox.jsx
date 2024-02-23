import React from "react";

const Checkbox = ({ questions }) => {
  return (
    <>
      <React.Fragment>
        <p>Soru:{questions[1].question}</p>

        {questions[1].answers.map((answer) => (
          <React.Fragment key={answer.id}>
            <input
              type="checkbox"
              name="checkbox"
              value={answer.answer}
              id={answer.id}
            />
            <label htmlFor={answer.id}>{answer.answer} </label>
          </React.Fragment>
        ))}
        <hr />
      </React.Fragment>
    </>
  );
};

export default Checkbox;
