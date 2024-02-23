import React from "react";

const Text = ({ questions }) => {
  return (
    <React.Fragment>
      <p>Soru: {questions[3].question}</p>
      <label htmlFor="text">
        <input type="text" name="text" id="text" />
      </label>
      <hr />
    </React.Fragment>
  );
};

export default Text;
