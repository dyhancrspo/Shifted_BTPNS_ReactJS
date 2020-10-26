import React, { Component } from "react";
import "./myButton.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`myButton ${this.props.class}`}>{this.props.text}</div>
    );
  }
}

export default Button;
