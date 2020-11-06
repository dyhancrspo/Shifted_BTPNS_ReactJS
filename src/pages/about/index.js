import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { DetailUser, EditUser } from "../../components";
import { Button } from "react-bootstrap";

import jwt from "jwt-decode";

import "./style.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      users: [],
    };
  }

  componentDidMount = async () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
    this.fetchingUserData();
  };

  //  Fetch Data User
  fetchingUserData = async () => {
    try {
      await fetch("http://localhost:8888/users", {
        mode: "cors",
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.props.dataLogin.token,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          this.setState({
            users: result.data[0].data,
          });
        });
    } catch (error) {
      console.log("Anda telah logout");
    }
  };

  // Button Back to Login Page
  clickBtn = () => {
    if (this.props.statusLoggedIn) return alert("Keluar dulu! baru masuk");
    this.props.history.push("/login");
  };

  // DELETE User fffrom Dtabase
  deleteUser = async (username) => {
    await fetch("http://localhost:8888/users/delete/" + username, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.dataLogin.token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        window.alert(result.message);
      })
      .catch((error) => console.log("error", error));
    this.fetchingUserData();
  };

  render() {
    if (!this.props.statusLoggedIn) return <Redirect to="/login" />;
    const userList = this.state.users;
    return (
      <>
        <div style={{ padding: "20px" }}>
          <button className="btn btn-secondary" onClick={this.clickBtn}>
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
            {userList.map((user, index) => {
              return (
                <tr key={index}>
                  <th align="center" scope="row">
                    {index + 1}
                  </th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td align="center">{user.role}</td>
                  <td align="center">
                    {/* <DetailUser
                      fetchdata={this.fetchingUserData}
                      user={user}
                      index={index}
                    />
                    <EditUser user={user} index={index} /> 
                    <Button
                      style={{ marginLeft: "20px" }}
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        if (window.confirm("Apakah Data Ingin Dihapus?"))
                          this.deleteUser(user.username);
                      }}
                    >
                      Delete
                    </Button>*/}
                    <Button
                      style={{ marginLeft: "20px" }}
                      size="sm"
                      variant="info"
                      onClick={() => {
                        // if (window.confirm("Apakah Data Ingin Dihapus?"))
                        //   this.deleteUser(user.username);
                      }}
                    >
                      Detail
                    </Button>
                    <Button
                      style={{ marginLeft: "20px" }}
                      size="sm"
                      variant="warning"
                      onClick={() => {}}
                    >
                      Edit
                    </Button>
                    <Button
                      style={{ marginLeft: "20px" }}
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        if (window.confirm("Apakah Data Ingin Dihapus?"))
                          this.deleteUser(user.username);
                      }}
                    >
                      Delete
                    </Button>
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
  dataLogin: state.auth.username,
});

export default connect(mapStateToProps)(About);
// export default About;
