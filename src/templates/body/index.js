import React, { Component } from "react";
import { Home, About, Login, Register } from "../../pages";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./style.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      admin: [
        {
          name: "Super Admin",
          username: "superadmin",
          password: "rahasia",
          roleType: "Admin",
        },
      ],
    };
  }

  // componentDidMount = async () => {
  //   // Fetching Api from API
  //   await fetch("http://localhost:3333/user")
  //     .then((response) => response.json())
  //     .then((json) => this.props.doFetch(json.users));
  // };

  componentDidMount = async () => {
    // Fetching Api from Json Placeholder
    await fetch("http://localhost:3333/user")
      // await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const dataUsers = json.map((user) => {
          return { ...user };
        });
        console.info("Data User: ", dataUsers);
        this.setState({
          users: [...dataUsers, ...this.state.admin],
        });
      });
  };

  // componentDidMount = () => {
  //   fetch("http://localhost:3333/user")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const users = data.map((user) => ({
  //         ...user,
  //       }));

  //       this.props.doFetch({
  //         users: [...users],
  //       });
  //     });
  // };

  addUsers = (obj) => {
    const { name, username, password } = obj;
    let oldUsers = this.state.users;
    oldUsers.push({
      name,
      username,
      password,
      roleType: "User",
    });
    this.setState({
      users: oldUsers,
    });
  };

  // Show Page Function (nav/body)
  showPage = () => {
    const { statusLoggedIn, changeLoggedIn } = this.props;

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/about"
          children={(props) => (
            <About
              {...props}
              listUsers={this.state.users}
              statusLoggedIn={this.props.statusLoggedIn}
            />
          )}
        />

        <Route
          path="/login"
          children={(props) => (
            <Login {...props} listUsers={this.state.users} />
          )}
        />

        <Route path="/register" component={Register}>
          <Register
            listUsers={this.state.users}
            addingNewUser={this.addUsers}
          />
        </Route>
      </Switch>
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

const mapDispatchToProps = (dispatch) => ({
  doFetch: (data) => dispatch({ type: "FETCH", payload: { dataUsers: data } }),
});

export default connect(null, mapDispatchToProps)(Body);
