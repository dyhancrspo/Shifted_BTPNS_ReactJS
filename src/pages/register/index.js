import React, { Component } from "react";
import { InputField, RowInput } from "../../components";
import { Redirect, Link } from "react-router-dom";

const API = process.env.REACT_APP_API;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      role_id: "2",
    };
  }

  componentDidMount() {
    window.scrollTo({ top: 600, behavior: "smooth" });
  }

  //   Fungsi get Input Data
  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  // Fungsi Fetch Register
  fetchingRegisterApi = async (dataRegist) => {
    await fetch(`${API}auth/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataRegist),
    })
      .then((response) => response.json())
      .then((result) => {
        window.alert(result.message);
      })
      .catch((error) => console.log("error", error));
  };

  //  Fungsi Register
  onRegister = () => {
    const { username, password, name, role_id } = this.state;
    const registerData = { username, password, name, role_id };
    this.fetchingRegisterApi(registerData);
    // this.props.addingNewUser({ name, username, password, roleType });
    // alert(`${name},  Yeay!! Pendaftaranmu berhasil!`);

    // // Log
    // console.log("Sukses Regis : ", name, "/", username, "=>", password);
  };

  render() {
    if (this.props.statusLoggedIn) return <Redirect to="/login" />;
    return (
      <div className="form-group row">
        <div className="">
          <RowInput
            value={this.state.name}
            label="Full Name"
            type="text"
            name="name"
            onChange={this.onChangeInput}
          />
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
            valueInput="Register"
            onClickInput={this.onRegister}
          />
        </div>
      </div>
    );
  }
}

export default Register;
