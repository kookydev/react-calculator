import React, { Component } from "react";
import "./Container.css";
import Display from "./Display";
import Keyboard from "./Keyboard";

const Container = props => {
  return (
    <div className="container">
      <Display className="display" />
      <Keyboard />
    </div>
  );
};

export default Container;
