import React, { Component } from "react";
import { Home, About, Login, Register } from "../../pages";

import "./style.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  addUsers = (obj) => {
    const { fullname, username, password } = obj;
    let oldUsers = this.state.users;
    oldUsers.push({
      fullname,
      username,
      password,
    });
    this.setState({
      users: oldUsers,
    });
  };

  showPage = () => {
    const { page } = this.props;

    if (page === "home") return <Home />;
    if (page === "about") return <About />;
    if (page === "login")
      return (
        <Login
          listUsers={this.state.users}
          changeLoggedIn={this.props.changeLoggedIn}
        />
      );

    if (page === "register")
      return (
        <Register listUsers={this.state.user} addingNewUser={this.addUsers} />
      );
  };

  render() {
    return (
      <>
        <div className="body-content">
          <div className="content">{this.showPage()}</div>
        </div>
      </>
    );
  }
}

export default Body;
