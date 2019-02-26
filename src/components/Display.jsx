import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  state = {
    value: 0,
    input: 0,
    inputArray: [0],
    display: 0
  };
  digitAdder = props => {
    let tempArray = this.state.inputArray;
    tempArray.push(props.value);
    this.setState({ inputArray: tempArray });
    this.inputParser();
  };

  inputParser = () => {
    let tempValue = parseInt(this.state.inputArray.join(""));
    this.setState({ input: tempValue, display: tempValue });
  };

  addition = () => {
    let tempValue = this.state.value + this.state.input;
    this.setState({ value: tempValue });
  };

  subtraction = () => {
    this.setState({ value: this.state.value - this.state.input });
  };

  multiplication = () => {
    this.setState({ value: this.state.value * this.state.input });
  };
  division = () => {
    this.setState({ value: this.state.value / this.state.input });
  };
  clearDisplay = () => {
    this.setState({ value: 0 });
  };

  negateValue = () => {
    let tempValue = -1 * this.state.value;
    this.setState({ value: tempValue });
  };

  percentage = () => {
    this.setState({ value: this.state.value / 100 });
  };

  render() {
    return <div className="display">{this.state.display}</div>;
  }
}

export default Display;
