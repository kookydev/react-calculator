import React, { Component } from "react";
import "./Container.css";
import Display from "./Display";
import Keyboard from "./Keyboard";

class Container extends Component {
  state = {
    display: 0
  };

  vars = {
    value: 0,
    input: 0,
    operator: null,
    inputArray: []
  };

  // this.setState((state, props) => )

  digitHandler = val => {
    let tempArray = this.vars.inputArray;
    if (!isNaN(val) || val === ".") {
      tempArray.push(val);
      this.setState((state, props) => ({
        inputArray: tempArray
      }));
      console.log(`inputArray: ${this.state.inputArray}`);
      this.vars.input = parseFloat(this.vars.inputArray.join(""));
      console.log(`input: ${this.state.input}`);
      this.setState((state, props) => ({ display: state.input }));
      console.log(`Display: ${this.state.display}`);
    } else {
      if (this.state.operator === null) {
        let tempOperator = val;
        this.setState((state, props) => ({
          operator: tempOperator,
          value: state.input,
          inputArray: []
        }));
        this.setState((state, props) => ({
          input: 0
        }));
        console.log(`operator: ${this.state.operator}`);
      } else {
        if (this.state.value > 0) {
          this.operatorHandler(val);
        } else {
          let tempOperator = val;
          this.setState((state, props) => ({ operator: tempOperator }));
          console.log(`operator: ${this.state.operator}`);
        }
      }
    }
  };

  operatorHandler = val => {
    if (val === "AC") {
      this.clearDisplay();
    } else if (val === "%") {
      this.percentage();
    } else if (val === "+/-") {
      this.negateValue();
    } else {
      console.log("this is the switch");
      switch (this.state.operator) {
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
          console.log(`Value was "${val}"`);
      }
      if (val === "=") {
        this.setState((state, props) => ({
          operator: null,
          inputArray: [],
          input: 0
        }));
      } else {
        this.setState((state, props) => ({ operator: val }));
      }
    }
  };

  addition = () => {
    console.log("this is addition");
    let tempValue = this.state.value + this.state.input;
    this.setState((state, props) => ({
      value: tempValue,
      inputArray: [],
      input: 0,
      display: tempValue
    }));
  };

  subtraction = () => {
    let tempValue = this.state.value - this.state.input;
    this.setState((state, props) => ({
      value: tempValue,
      inputArray: [],
      input: 0,
      display: tempValue
    }));
  };

  multiplication = () => {
    let tempValue = this.state.value * this.state.input;
    this.setState((state, props) => ({
      value: tempValue,
      inputArray: [],
      input: 0,
      display: tempValue
    }));
  };
  division = () => {
    let tempValue = this.state.value / this.state.input;
    this.setState((state, props) => ({
      value: tempValue,
      inputArray: [],
      input: 0,
      display: tempValue
    }));
  };
  clearDisplay = () => {
    this.setState((state, props) => ({
      operator: null,
      value: 0,
      inputArray: [],
      input: 0,
      display: 0
    }));
    console.log(this.state.inputArray);
    console.log(this.state.operator);
    console.log(this.state.value);
  };

  equals = () => {};

  negateValue = () => {
    let tempValue = -1 * this.state.value;
    this.setState((state, props) => ({
      value: tempValue,
      inputArray: [],
      input: 0,
      display: tempValue
    }));
  };

  percentage = () => {
    let tempValue = this.state.value / 100;
    this.setState((state, props) => ({
      value: tempValue,
      inputArray: [],
      input: 0,
      operator: null,
      display: tempValue
    }));
  };

  render() {
    return (
      <div className="outer-container">
        <div className="container">
          <Display display={this.state.display} className="display" />
          <Keyboard digitHandler={this.digitHandler} />
        </div>
      </div>
    );
  }
}

export default Container;
