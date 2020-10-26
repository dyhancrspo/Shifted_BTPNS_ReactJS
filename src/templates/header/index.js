import React, { Component } from "react";
import { Button } from "../../components";

import imageHeader from "../../assets/images/image2.jpg";
import Flip from "react-reveal/Flip";
import "./style.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Flip>
        <div className="header-container">
          <div className="img">
            <img className="imgHeader" src={imageHeader} alt="image header" />
          </div>
          <div className="headerText">
            <h1>Bosen dirumah aja? Mau Jalan-jalan?</h1>
            <p>
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button text="Show Me" />
          </div>
        </div>
      </Flip>
    );
  }
}

export default Header;
