import React, { Component } from "react";
import "./Buttons.css";
import Display from "./Display";

const NumberButtons = props => {
  return (
    <div
      onClick={Display.digitAdder}
      value={props.value}
      className="number-buttons"
    >
      {props.value}
    </div>
  );
};

export default NumberButtons;
