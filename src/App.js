import React, { Component } from "react";
import { Header, Nav, Body, Footer } from "./templates";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "register",
      isLoggedIn: false,
    };
  }

  onClickButton = (page) => {
    this.setState({
      page,
    });
  };

  changeLoggedIn = () => {
    this.setState((oldState) => ({ isLoggedIn: !oldState.isLoggedIn }));
  };

  render() {
    return (
      <>
        <Nav
          statusLoggedIn={this.state.isLoggedIn}
          changeLoggedIn={this.changeLoggedIn}
          changePage={this.onClickButton}
        />
        <Header />
        <Body changeLoggedIn={this.changeLoggedIn} page={this.state.page} />
        <Footer />
      </>
    );
  }
}

export default App;
