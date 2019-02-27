import React, { Component } from "react";
import "./Container.css";
import Display from "./Display";
import Keyboard from "./Keyboard";

class Container extends Component {
  state = {
    value: 0,
    input: 0,
    operator: null,
    inputArray: [],
    display: 0
  };

  digitHandler = val => {
    let tempArray = this.state.inputArray;
    if (!isNaN(val) || val === ".") {
      tempArray.push(val);
      this.setState({ inputArray: tempArray });
      console.log(`inputArray: ${this.state.inputArray}`);
      let tempValue = parseInt(this.state.inputArray.join(""));
      this.setState({ input: tempValue, display: tempValue });
    } else {
      if (this.state.operator === null) {
        let tempOperator = val;
        this.setState({
          operator: tempOperator,
          value: this.state.input,
          inputArray: []
        });
        console.log(`operator: ${this.state.operator}`);
      } else {
        if (this.state.value > 0) {
          this.operatorHandler(val);
        } else {
          let tempOperator = val;
          this.setState({ operator: tempOperator });
          console.log(`operator: ${this.state.operator}`);
        }
      }
    }
  };

  operatorHandler = val => {
    console.log("this is the switch");
    if (val === "AC") {
      this.clearDisplay();
    } else {
      switch (this.state.operator) {
        case "%":
          this.percentage();
          break;
        case "÷":
          this.division();
          break;
        case "x":
          this.multiplication();
          break;
        case "-":
          this.subtraction();
          break;
        case "+":
          this.addition();
          break;
        default:
          console.log("Error! that wasn't right...");
      }
    }
    this.setState({ operator: val });
  };

  addition = () => {
    console.log("this is addition");
    let tempValue = this.state.value + this.state.input;
    this.setState({ value: tempValue, inputArray: [], display: tempValue });
  };

  subtraction = () => {
    let tempValue = this.state.value - this.state.input;
    this.setState({ value: tempValue, inputArray: [], display: tempValue });
  };

  multiplication = () => {
    let tempValue = this.state.value * this.state.input;
    this.setState({ value: tempValue, inputArray: [], display: tempValue });
  };
  division = () => {
    let tempValue = this.state.value / this.state.input;
    this.setState({ value: tempValue, inputArray: [], display: tempValue });
  };
  clearDisplay = () => {
    this.setState({ operator: null, value: null, inputArray: [], display: 0 });
  };

  equals = () => {};

  negateValue = () => {
    let tempValue = -1 * this.state.value;
    this.setState({ value: tempValue, inputArray: [], display: tempValue });
  };

  percentage = () => {
    let tempValue = this.state.value / 100;
    this.setState({
      value: tempValue,
      inputArray: [],
      operator: null,
      display: tempValue
    });
  };

  render() {
    return (
      <div className="container">
        <Display display={this.state.display} className="display" />
        <Keyboard digitHandler={this.digitHandler} />
      </div>
    );
  }
}

export default Container;
