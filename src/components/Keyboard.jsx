import React from "react";
import "./Keyboard.css";

import Buttons from "./Buttons";

const Keyboard = props => {
  const keyboardButtons = [
    { value: "AC", class: "buttons function-buttons" },
    { value: "+/-", class: "buttons function-buttons" },
    { value: "%", class: "buttons function-buttons" },
    { value: "÷", class: "buttons operator-buttons" },
    { value: 7, class: "buttons number-buttons" },
    { value: 8, class: "buttons number-buttons" },
    { value: 9, class: "buttons number-buttons" },
    { value: "x", class: "buttons operator-buttons" },
    { value: 4, class: "buttons number-buttons" },
    { value: 5, class: "buttons number-buttons" },
    { value: 6, class: "buttons number-buttons" },
    { value: "-", class: "buttons operator-buttons" },
    { value: 1, class: "buttons number-buttons" },
    { value: 2, class: "buttons number-buttons" },
    { value: 3, class: "buttons number-buttons" },
    { value: "+", class: "buttons operator-buttons" },
    { value: 0, class: "buttons zero-button number-buttons" },
    { value: ",", class: "buttons number-buttons" },
    { value: "=", class: "buttons operator-buttons" }
  ];

  return (
    <div className="keyboard-grid">
      {keyboardButtons.map(button => {
        return (
          <Buttons
            digitHandler={props.digitHandler}
            value={button.value}
            class={button.class}
          />
        );
      })}
    </div>
  );
};

export default Keyboard;
