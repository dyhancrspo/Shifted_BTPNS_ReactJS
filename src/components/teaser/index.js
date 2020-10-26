import React, { Component } from "react";
import Brand from "../brand";
import Bounce from "react-reveal/Bounce";
import "./style.css";
import imageTeaser1 from "../../assets/images/image2.jpg";
import imageTeaser2 from "../../assets/images/imageHeader.jpg";

class Teaser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="teaser-content">
        <Bounce Left>
          <div className="container">
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <div className="col-xl-8 col-lg-7">
                <img
                  className="img-fluid mb-3 mb-lg-0 teaser"
                  src={imageTeaser1}
                  alt=""
                />
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="featured-text text-center text-lg-left">
                  <h4>
                    <Brand />
                  </h4>
                  <p className="text-black-50 mb-0">
                    Siapapun yang menggunakan mukena ini akan menjadikan wanita
                    yang memakainyabagaikan bidadari syurga cantik!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Bounce>
        <Bounce Right>
          <div className="container py-2">
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <div className="col-xl-4 col-lg-7">
                <div className="featured-text text-center text-lg-left">
                  <h4>
                    <Brand />
                  </h4>
                  <p className="text-black-50 mb-0">
                    Siapapun yang menggunakan mukena ini akan menjadikan wanita
                    yang memakainyabagaikan bidadari syurga cantik!
                  </p>
                </div>
              </div>
              <div className="col-xl-8 col-lg-5">
                <img
                  className="img-fluid mb-3 mb-lg-0 teaser"
                  src={imageTeaser2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Bounce>
      </div>
    );
  }
}

export default Teaser;
