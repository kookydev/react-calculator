import React from "react";
import "./Keyboard.css";

import Buttons from "./Buttons";
import Display from "./Display";

const Keyboard = props => {
  return (
    <div className="keyboard-grid">
      <Buttons value="CE" class="buttons function-buttons" />
      <Buttons value="+/-" class="buttons function-buttons" />
      <Buttons value="%" class="buttons function-buttons" />
      <Buttons value="÷" class="buttons operator-buttons" />
      <Buttons value={7} class="buttons number-buttons" />
      <Buttons value={8} class="buttons number-buttons" />
      <Buttons value={9} class="buttons number-buttons" />
      <Buttons value="x" class="buttons operator-buttons" />
      <Buttons value={4} class="buttons number-buttons" />
      <Buttons value={5} class="buttons number-buttons" />
      <Buttons value={6} class="buttons number-buttons" />
      <Buttons value="-" class="buttons operator-buttons" />
      <Buttons value={1} class="buttons number-buttons" />
      <Buttons value={2} class="buttons number-buttons" />
      <Buttons value={3} class="buttons number-buttons" />
      <Buttons value="+" class="buttons operator-buttons" />
      <Buttons value={0} class="buttons zero-button number-buttons" />
      <Buttons value="." class="buttons number-buttons" />
      <Buttons value="=" class="buttons operator-buttons" />
    </div>
  );
};

export default Keyboard;
