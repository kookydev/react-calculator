import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  state = {
    value: 0,
    input: 0,
    operator: 0,
    inputArray: [0],
    display: 0
  };
  digitAdder = value => {
    let tempArray = this.state.inputArray;
    if (value.isNaN && value !== ".") {
      this.setState({ operator: value });
      console.log(`operator: ${this.state.operator}`);
    } else {
      tempArray.push(value);
      this.setState({ inputArray: tempArray });
      console.log(`inputArray: ${this.state.inputArray}`);
      this.inputParser();
    }
  };

  inputParser = () => {
    let tempValue = parseInt(this.state.inputArray.join(""));
    this.setState({ input: tempValue, display: tempValue });
  };

  // addition = () => {
  //   let tempValue = this.state.value + this.state.input;
  //   this.setState({ value: tempValue });
  // };

  // subtraction = () => {
  //   let tempValue = this.state.value - this.state.input;
  //   this.setState({ value: tempValue });
  // };

  // multiplication = () => {
  //   let tempValue = this.state.value * this.state.input;
  //   this.setState({ value: tempValue });
  // };
  // division = () => {
  //   let tempValue = this.state.value / this.state.input;
  //   this.setState({ value: tempValue });
  // };
  // clearDisplay = () => {
  //   this.setState({ value: 0 });
  // };

  // equals = () => {};

  // negateValue = () => {
  //   let tempValue = -1 * this.state.value;
  //   this.setState({ value: tempValue });
  // };

  // percentage = () => {
  //   this.setState({ value: this.state.value / 100 });
  // };

  render() {
    return <div className="display">{this.state.display}</div>;
  }
}

export default Display;
