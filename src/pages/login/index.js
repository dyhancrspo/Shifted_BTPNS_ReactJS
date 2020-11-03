import React, { Component } from "react";
import { InputField, RowInput } from "../../components";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      roleType: "",
    };
  }

  componentDidMount() {
    window.scrollTo({ top: 600, behavior: "smooth" });
  }

  //   Fungsi Handler OnChange Input
  onChangeInput = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi Login
  onLogin = () => {
    const { username, password } = this.state;
    let statusLoggedIn = this.props.listUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (statusLoggedIn) {
      alert(`Hei! ${statusLoggedIn.name}, Selamat kamu berhasil Login!`);
      this.props.doLogin(username);
      // this.props.changeLoggedIn();
      console.log("Login  :", username, "=>", password);
    } else {
      alert("Username atau Password yang anda masukkan salah!!!");
    }
  };

  //   Fungsi Login
  // onLogin = () => {
  //   const { username, password } = this.state;
  //   console.log(username, " : ", password);
  //   this.props.doLogin(username);
  // };

  render() {
    if (this.props.statusLoggedIn) return <Redirect to="/about" />;
    return (
      <div className="form-group row">
        <div className="">
          <RowInput
            value={this.state.username}
            label="Username"
            type="text"
            name="username"
            onChange={this.onChangeInput}
          />
          <RowInput
            value={this.state.password}
            label="Password"
            type="password"
            name="password"
            onChange={this.onChangeInput}
          />
          <InputField
            typeInput="button"
            valueInput="Login"
            onClickInput={this.onLogin}
            className="btn btn-primary"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLoggedIn: state.auth.isLoggedIn,
  usernameLogin: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  doFetch: (data) => dispatch({ type: "FETCH", payload: { dataUsers: data } }),
  doLogin: (user) => dispatch({ type: "LOGIN", payload: { username: user } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
