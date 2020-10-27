import React, { Component } from "react";
import { InputField, RowInput } from "../../components";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: "",
      username: "",
      password: "",
      roleType: "",
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

  //  Fungsi Register
  onRegister = () => {
    const { name, username, password, roleType } = this.state;
    this.props.addingNewUser({ name, username, password, roleType });
    alert(`${name},  Yeay!! Pendaftaranmu berhasil!`);

    // Log
    console.log("Sukses Regis : ", name, "/", username, "=>", password);
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
