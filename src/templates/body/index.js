import React, { Component } from "react";
import { Home, About, Login, Register } from "../../pages";
import { Route, Switch } from "react-router-dom";

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
    const { changeLoggedIn, statusLoggedIn } = this.props;

    // if (page === "home") return <Home />;
    // if (page === "about") return <About />;
    // if (page === "login") return;
    // <Login
    //   listUsers={this.state.users}
    //   changeLoggedIn={this.props.changeLoggedIn}
    // />;
    // if (page === "register") return;
    // <Register listUsers={this.state.user} addingNewUser={this.addUsers} />;

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/about"
          children={(props) => (
            <About {...props} statusLoggedIn={this.props.statusLoggedIn} />
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
        {/* <Route path="/register" component={Register}>
          <Register listUsers={this.state.user} addingNewUser={this.addUsers} />
        </Route> */}
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
