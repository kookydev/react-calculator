import React from "react";
import "./Buttons.css";

const Buttons = props => {
  let keyVal = props.value.toString();
  console.log(keyVal);
  return (
    <button
      onClick={() => props.digitHandler(props.value)}
      className={props.class}
      key={keyVal}
      // value={props.value}
    >
      {props.value}
    </button>
  );
};

export default Buttons;
