import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../../components";
import { connect } from "react-redux";
import "./style.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // shouldComponentUpdate(lastProp, nextProp) {
  //   console.log("props: ", this.props);
  //   console.log("lastProp: ", lastProp);
  //   if (lastProp.statusLoggedIn !== this.props.statusLoggedIn) return true;
  //   return false;
  // }

  render() {
    return (
      <div className="nav-container">
        <Menu
          text="JalaninAja."
          class="first"
          goToPage={() => this.props.changePage("home")}
        />
        <Link to="/">
          <Menu text="Home" goToPage={() => this.props.changePage("home")} />
        </Link>
        <Link to="/about">
          <Menu text="About" goToPage={() => this.props.changePage("about")} />
        </Link>

        {this.props.statusLoggedIn ? (
          <Menu text="Logout" goToPage={this.props.doLogout} />
        ) : (
          <>
            <Link to="/login">
              <Menu
                text="Login"
                goToPage={() => this.props.changePage("login")}
              />
            </Link>
            <Link to="/register">
              <Menu
                text="Join Now"
                goToPage={() => this.props.changePage("register")}
              />
            </Link>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLoggedIn: state.auth.isLoggedIn,
});
const mapDispacthToProps = (dispatch) => ({
  doLogout: () => dispatch({ type: "LOGOUT" }),
});

export default connect(mapStateToProps, mapDispacthToProps)(Nav);

// export default Nav;
