import React from "react";
import "./Buttons.css";

const Buttons = props => {
  console.log(props.value);
  return (
    <button
      onClick={() => props.digitHandler(props.value)}
      className={props.class}
      // value={props.value}
    >
      {props.value}
    </button>
  );
};

export default Buttons;
