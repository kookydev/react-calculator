import React from "react";
import "./Buttons.css";
import Display from "./Display";

const Buttons = props => {
  console.log(props.value);
  return (
    <button
      onClick={Display.digitAdder}
      className={props.class}
      value={props.value}
    >
      {props.value}
    </button>
  );
};

export default Buttons;
