import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer>
        <div className="myFooter">&copy; 2020. Allright reserved.</div>
      </footer>
    );
  }
}

export default Footer;
