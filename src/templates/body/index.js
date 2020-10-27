import React, { Component } from "react";
import { Home, About, Login, Register } from "../../pages";
import { Route, Switch } from "react-router-dom";

import "./style.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      admin: [
        {
          name: "Administratot",
          username: "admin",
          password: "rahasia",
          roleType: "Admin",
        },
        {
          name: "Super Admin",
          username: "superadmin",
          password: "rahasia",
          roleType: "Admin",
        },
      ],
      // defaultPassword: "test",
      // defaultRoleType: "User",
      // listUserAPI: [],
    };
  }

  componentDidMount = async () => {
    // Fetching Api from Json Placeholder
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const dataUsers = json.map((user) => {
          return { ...user, password: "test", roleType: "User" };
        });
        console.info("Data User: ", dataUsers);
        this.setState({
          users: [...dataUsers, ...this.state.admin],
        });
      });
  };

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

  /* old fetching method
  componentDidMount = async () => {
    // Fetching Api from Json Placeholder
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ listUserAPI: json }));
    const userAPI = this.state.users;
    this.state.listUserAPI.forEach((user) => {
      let obj = {
        name: user.name,
        username: user.username,
        password: this.state.defaultPassword,
        roleType: this.state.defaultRoleType,
      };
      userAPI.push(obj);
    });
    this.setState({
      users: userAPI,
    });
    console.log(userAPI);
  };

  addUsers = (obj) => {
    const { name, username, password } = obj;
    let oldUsers = this.state.users;
    oldUsers.push({
      name,
      username,
      password,
      roleType: "Administrator",
    });
    this.setState({
      users: oldUsers,
    });
  }; 
  */

  // Show Page Function (nav/body)
  showPage = () => {
    const { changeLoggedIn } = this.props;

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
        {/* <Route path="/login" component={Login}>
          <Login listUsers={this.state.users} changeLoggedIn={changeLoggedIn} />
        </Route> */}
        <Route
          path="/login"
          children={(props) => (
            <Login
              {...props}
              listUsers={this.state.users}
              changeLoggedIn={changeLoggedIn}
              statusLoggedIn={this.props.statusLoggedIn}
            />
          )}
        />

        <Route path="/register" component={Register}>
          <Register listUsers={this.state.user} addingNewUser={this.addUsers} />
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

export default Body;
