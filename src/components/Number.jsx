import React from "react";

const Number = ({ questions }) => {
  return (
    <React.Fragment>
      <p>Soru:{questions[0].question}</p>
      <label htmlFor="number">
        <input type="number" id="number" />
      </label>
      <hr />
    </React.Fragment>
  );
};

export default Number;
