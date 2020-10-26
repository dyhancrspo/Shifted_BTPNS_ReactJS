import React, { Component } from "react";
import { InputField, RowInput } from "../../components";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      fullname: "",
      username: "",
      password: "",
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
  onRegister = async () => {
    const { fullname, username, password } = this.state;

    this.props.addingNewUser({ fullname, username, password });

    // let oldUsers = this.state.users;
    // oldUsers.push({
    //   fullname,
    //   username,
    //   password,
    // });
    // await this.setState({
    //   users: oldUsers,
    // });
    alert(fullname + ",  Yeay!! Pendaftaranmu berhasil!");

    // Log
    console.log(this.state.users);
    console.log("Sukses Regis : ", fullname, "/", username, "=>>", password);
  };

  render() {
    return (
      <div className="form-group row">
        <div className="">
          <RowInput
            value={this.state.fullname}
            label="Full Name"
            type="text"
            name="fullname"
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
