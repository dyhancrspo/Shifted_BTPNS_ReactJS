import React, { Component } from "react";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container" style={{ paddingBottom: "70px" }}>
        <blockquote className="blockquote text-right">
          <p className="mb-2">
            A wowan is unstoppable after she realizes she deserves better
          </p>
          <footer className="blockquote-footer">
            <b>Irene N</b> <i>Founder of HijabIrene</i>
          </footer>
        </blockquote>
      </div>
    );
  }
}

export default Quote;
