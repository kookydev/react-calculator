import React, { Component } from 'react';

class Display extends Component {
    state = { 
        value: 0,
        input: parseInt(inputArray.join("")),
        inputArray: [],
        
 }

    addition = () => {
        this.state.value = this.state.value + this.state.input
    }

    subtraction = () => {
        this.state.value = this.state.value - this.state.input
    }

    multiplication = () => {
        this.state.value = this.state.value * this.state.input
    }

    addition = () => {
        this.state.value = this.state.value / this.state.input
    }
    render() { 
        return (  );
    }
}
 
export default Display;