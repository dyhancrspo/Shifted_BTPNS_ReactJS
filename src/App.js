import React, { Component } from "react";
import { Header, Nav, Body, Footer } from "./templates";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      isLoggedIn: false,
    };
  }

  onClickButton = (page) => {
    this.setState({
      page,
    });
  };

  // Change Login Status
  changeLoggedIn = () => {
    this.setState((oldState) => ({ isLoggedIn: !oldState.isLoggedIn }));
  };

  doLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  doLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <>
        <Nav changePage={this.onClickButton} />
        <Header />
        <Body
          statusLoggedIn={this.state.isLoggedIn}
          changeLoggedIn={this.changeLoggedIn}
          page={this.state.page}
          changePage={this.onClickButton}
        />
        <Footer />
      </>
    );
  }
}

export default App;
