import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const [text, setText] = useState("");

  const handleAdd = () => {
    //setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  const handleSub = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <input
        type="text"
        value={text}
        placeholder="write something"
        onChange={handleTextChange}
      />
      <p>
        That youre texting is: <strong>{text}</strong>
      </p>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSub}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
