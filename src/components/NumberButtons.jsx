import React, { Component } from "react";
import "./Buttons.css";
import Display from "./Display";

const NumberButtons = props => {
  if (props.value === "0") {
    return (
      <div
        onClick={Display.digitAdder}
        value={props.value}
        className="number-buttons zero-button"
      >
        {props.value}
      </div>
    );
  } else {
    return (
      <div
        onClick={Display.digitAdder}
        value={props.value}
        className="number-buttons"
      >
        {props.value}
      </div>
    );
  }
};

export default NumberButtons;
