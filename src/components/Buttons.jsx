import React from "react";
import "./Buttons.css";
import Display from "./Display";

const Buttons = props => {
  return (
    <button
      onClick={Display.digitAdder}
      value={props.value}
      className={props.class}
    >
      {props.value}
    </button>
  );
};

export default Buttons;
