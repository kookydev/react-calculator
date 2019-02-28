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

  vars = {
    value: null,
    input: 0,
    operator: null,
    inputArray: [],
    display: 0
  };

  digitHandler = val => {
    if (!isNaN(val) || val === ",") {
      this.vars.inputArray.push(val);
      console.log(`inputArray: ${this.vars.inputArray}`);
      let tempInput = this.vars.inputArray.join("");
      this.vars.input = parseFloat(tempInput);
      console.log(`input: ${this.vars.input}`);
      this.setState({ display: this.vars.input });
    } else {
      if (this.vars.operator === null) {
        if (val !== "=") {
          this.vars.operator = val;
          this.vars.value = this.vars.input;
          this.vars.inputArray = [];
          this.vars.input = 0;
          console.log(`operator: ${this.vars.operator}`);
        } else {
          this.vars.operator = null;
          this.vars.inputArray = [];
          this.vars.input = 0;
        }
      } else {
        if (this.vars.value !== 0) {
          this.operatorHandler(val);
        } else {
          this.vars.operator = val;
          console.log(`operator: ${this.vars.operator}`);
        }
      }
    }
  };

  operatorHandler = val => {
    console.log("this is the switch");
    if (val === "AC") {
      this.clearDisplay();
    } else if (val === "%") {
      this.percentage();
    } else if (val === "+/-") {
      this.negateValue();
    } else {
      switch (this.vars.operator) {
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
      this.vars.operator = val;
    }
  };

  addition = () => {
    console.log("this is addition");
    this.vars.value += this.vars.input;
    this.vars.inputArray = [];
    this.setState({ display: this.vars.value });
  };

  subtraction = () => {
    this.vars.value -= this.vars.input;
    this.vars.inputArray = [];
    this.setState({ display: this.vars.value });
  };

  multiplication = () => {
    this.vars.value *= this.vars.input;
    this.vars.inputArray = [];
    this.setState({ display: this.vars.value });
  };
  division = () => {
    this.vars.value /= this.vars.input;
    this.vars.inputArray = [];
    this.setState({ display: this.vars.value });
  };
  clearDisplay = () => {
    this.vars.operator = null;
    this.vars.value = 0;
    this.vars.inputArray = [];
    this.setState((state, props) => ({
      display: this.vars.value
    }));
  };

  negateValue = () => {
    this.vars.value = -1 * this.vars.value;
    this.vars.inputArray = [];
    this.setState({ display: this.vars.value });
  };

  percentage = () => {
    this.vars.value = this.vars.value / 100;
    this.vars.inputArray = [];
    this.vars.operator = null;
    this.setState({
      display: this.vars.value
    });
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
