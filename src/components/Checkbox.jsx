import React from "react";

const Checkbox = ({ questions }) => {
  const checkboxInput = document.querySelector("input");
  const handleClick = () => {
    console.log(checkboxInput.value);
  };

  return (
    <>
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
      <button onClick={handleClick}>Gönder</button>
      <hr />
    </>
  );
};

export default Checkbox;
