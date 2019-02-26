import React, { Component } from "react";

class Display extends Component {
  state = {
    value: 0,
    input: parseInt(this.state.inputArray.join("")),
    inputArray: [],
    display: 0
  };
  digitAdder = props => {
    this.state.inputArray.push(props.value);
  };

  addition = () => {
    this.state.value = this.state.value + this.state.input;
  };

  subtraction = () => {
    this.state.value = this.state.value - this.state.input;
  };

  multiplication = () => {
    this.state.value = this.state.value * this.state.input;
  };

  division = () => {
    this.state.value = this.state.value / this.state.input;
  };
  render() {
    return this.state.display;
  }
}

export default Display;
