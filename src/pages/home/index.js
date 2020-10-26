import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Brand, Quote, Teaser } from "../../components";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({ top: 800, behavior: "smooth" });
  }

  render() {
    return (
      <div className="home-content">
        <Fade Top>
          <h1>
            <Brand />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ut
            corporis vel, omnis veritatis, nemo voluptatem minima, doloremque
            cum necessitatibus sint? Nihil, optio. Est sunt voluptatibus
            pariatur tempora excepturi dolore.
          </p>
          <Quote />
          <Teaser />
        </Fade>
      </div>
    );
  }
}

export default Home;
