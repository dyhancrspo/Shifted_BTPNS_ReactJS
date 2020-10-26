import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    window.scrollTo({ top: 600, behavior: "smooth" });
    // Fetching Api from Json Placeholder
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ users: json }));
  }

  render() {
    return (
      <>
        ini About
        <div className="">
          <button onClick={() => this.props.changePage("login")}>
            Go To Login
          </button>
        </div>
        {this.state.users.map((user, idx) => {
          return <div key={idx}>Name = {user.name}</div>;
        })}
      </>
    );
  }
}

export default About;
