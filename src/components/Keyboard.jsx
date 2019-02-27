import React from "react";
import "./Keyboard.css";

import Buttons from "./Buttons";

const Keyboard = props => {
  return (
    <div className="keyboard-grid">
      <Buttons
        digitHandler={props.digitHandler}
        value="AC"
        class="buttons function-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value="+/-"
        class="buttons function-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value="%"
        class="buttons function-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value="÷"
        class="buttons operator-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value={7}
        class="buttons number-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value={8}
        class="buttons number-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value={9}
        class="buttons number-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value="x"
        class="buttons operator-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value={4}
        class="buttons number-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value={5}
        class="buttons number-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value={6}
        class="buttons number-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value="-"
        class="buttons operator-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value={1}
        class="buttons number-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value={2}
        class="buttons number-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value={3}
        class="buttons number-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value="+"
        class="buttons operator-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value={0}
        class="buttons zero-button number-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value="."
        class="buttons number-buttons"
      />
      <Buttons
        digitHandler={props.digitHandler}
        value="="
        class="buttons operator-buttons"
      />
    </div>
  );
};

export default Keyboard;
