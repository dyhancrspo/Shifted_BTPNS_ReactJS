import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Zoom>
        <div
          className={`nav-menu ${this.props.class}`}
          onClick={this.props.goToPage}
        >
          {this.props.text}
        </div>
      </Zoom>
    );
  }
}

export default Menu;
