import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./style.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      users: [],
    };
  }

  componentDidMount() {
    window.scrollTo({ top: 600, behavior: "smooth" });
  }

  // Button Back to Login Page
  clickBtn = () => {
    if (this.props.statusLoggedIn) return alert("Keluar dulu! baru masuk");
    this.props.history.push("/login");
  };

  btnAdd = () => {};

  render() {
    if (!this.props.statusLoggedIn) return <Redirect to="/login" />;

    return (
      <>
        <div style={{ padding: "20px" }}>
          <button className="btn btn-info" onClick={this.clickBtn}>
            Back To Login
          </button>
        </div>
        <h1 id="title">Data User Table</h1>
        <button
          style={{ margin: "10px" }}
          className="btn btn-primary btn-circle"
          onClick={this.btnAdd}
        >
          <i className="fas fa-plus"> </i>
        </button>
        <table className="table table-bordered">
          <thead align="center">
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Username</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listUsers.map((user, index) => {
              return (
                <tr key={index}>
                  <th align="center" scope="row">
                    {index + 1}
                  </th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td align="center">{user.roleType}</td>
                  <td align="center">
                    <button
                      className="btn btn-info"
                      style={{ marginLeft: "20px" }}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-secondary"
                      style={{ marginLeft: "20px" }}
                    >
                      Edit
                    </button>
                    {user.roleType === "user" && (
                      <button
                        className="btn btn-danger"
                        style={{ margin: "0 20px" }}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLoggedIn: state.auth.isLoggedIn,
  usernameLogin: state.auth.username,
});

export default connect(mapStateToProps)(About);
// export default About;
