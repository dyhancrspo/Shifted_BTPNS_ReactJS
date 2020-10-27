import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { InputField, RowInput } from "../../components";

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
    window.title = "Login Page";
    window.scrollTo({ top: 600, behavior: "smooth" });
  }

  //   Fungsi Handler OnChange Input
  onChangeInput = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //   Fungsi Login
  onLogin = () => {
    const { username, password } = this.state;
    const exist = this.props.listUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (exist) {
      alert(`Hei! ${exist.name}, Selamat kamu berhasil Login!`);
      this.props.changeLoggedIn();
      console.log("Login  :", username, "=>", password);
    } else {
      alert("Username atau Password yang anda masukkan salah!!!");
    }
  };

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

export default Login;
