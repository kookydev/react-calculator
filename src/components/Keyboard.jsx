import React, { Component } from "react";
import "./Keyboard.css";

import NumberButtons from "./NumberButtons";
import FunctionButtons from "./FunctionButtons";
import Display from "./Display";

const Keyboard = props => {
  return (
    <div className="keyboard-grid">
      <FunctionButtons value={Display.clearDisplay} />
      <FunctionButtons value={Display.negateValue} />
      <FunctionButtons value={Display.percentage} />
      <FunctionButtons value={Display.division} />
      <NumberButtons value="7" />
      <NumberButtons value="8" />
      <NumberButtons value="9" />
      <FunctionButtons value={Display.multiplication} />
      <NumberButtons value="4" />
      <NumberButtons value="5" />
      <NumberButtons value="6" />
      <FunctionButtons value={Display.subtraction} />
      <NumberButtons value="1" />
      <NumberButtons value="2" />
      <NumberButtons value="3" />
      <FunctionButtons value={Display.addition} />
      <NumberButtons value="0" className="zero-button" />
      <NumberButtons value="." />
    </div>
  );
};

export default Keyboard;
