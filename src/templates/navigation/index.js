import React, { Component } from "react";
import { Menu } from "../../components";
import "./style.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="nav-container">
        <Menu
          text="JalaninAja."
          class="first"
          goToPage={() => this.props.changePage("home")}
        />
        <Menu text="Home" goToPage={() => this.props.changePage("home")} />
        <Menu text="About" goToPage={() => this.props.changePage("about")} />

        {this.props.statusLoggedIn ? (
          <Menu text="Logout" goToPage={this.props.changeLoggedIn} />
        ) : (
          <>
            <Menu
              text="Login"
              goToPage={() => this.props.changePage("login")}
            />
            <Menu
              text="Join Now"
              goToPage={() => this.props.changePage("register")}
            />
          </>
        )}
      </div>
    );
  }
}

export default Nav;
