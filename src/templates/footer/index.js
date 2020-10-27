import React, { Component } from "react";
import { Brand } from "../../components";
import "./style.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer>
        <div className="myFooter">
          <Brand />
          <h4> &copy; 2020. Allright reserved.</h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
