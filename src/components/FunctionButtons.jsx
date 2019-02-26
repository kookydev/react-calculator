import React, { Component } from "react";
import "./Buttons.css";

const Buttons = props => {
  return (
    <div className={props.class} value={props.value}>
      {props.value}
    </div>
  );
};

export default Buttons;
