import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
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

  clickBtn = () => {
    if (this.props.statusLoggedIn) return alert("Keluar dulu! baru masuk");
    this.props.history.push("/logout");
    // this.setState({
    //   redirect: true,
    // });
  };

  render() {
    if (!this.props.statusLoggedIn) return <Redirect to="/login" />;

    return (
      <>
        ini About
        <div style={{ padding: "20px" }}>
          <button onClick={this.clickBtn}>Go To Login</button>
        </div>
        {this.state.users.map((user, idx) => {
          return <div key={idx}>Name = {user.name}</div>;
        })}
      </>
    );
  }
}

export default About;
