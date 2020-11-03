import React, { Component } from "react";
import { Modal, Button, FormControl, FormLabel } from "react-bootstrap";
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      password: "",
      roleType: "User",
    };
  }

  // componentDidMount = () => {
  //   const index = this.props.index;
  //   this.setState({
  //     username: this.props.user[index].username,
  //     name: this.props.user[index].name,
  //     password: this.props.user[index].password,
  //     roleType: this.props.user[index].roleType,
  //   });
  // };

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };
  handleClose = () => {
    this.setState({
      setShow: false,
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      setShow: true,
      show: true,
    });
  };
  editProfil = async (Obj, username) => {
    await fetch("http://localhost:3010/edit/" + username, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Obj),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    window.location.reload();
  };
  handleEdit = () => {
    const { name, username, password, passwordConfirm, roleType } = this.state;
    if (password === passwordConfirm) {
      this.editProfil({ name, username, password, roleType }, username);
      window.alert("Data telah tersimpan");
    } else {
      window.alert("Password tidak sama");
    }
  };
  render() {
    const user = this.props.user;
    const index = this.props.index;
    return (
      <>
        <Button
          style={{ marginLeft: "20px" }}
          size="sm"
          variant="warning"
          onClick={this.handleShow}
        >
          Edit
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Produk</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormLabel>Nama</FormLabel>
            <FormControl
              onChange={this.onChangeInput}
              name="name"
              type="text"
              value={this.state.name}
            ></FormControl>
            <FormLabel>username</FormLabel>
            <FormControl
              onChange={this.onChangeInput}
              name="username"
              type="text"
              value={user[index].username}
              readOnly
            ></FormControl>
            <FormLabel>Tipe Akun</FormLabel>
            <FormControl
              onChange={this.onChangeInput}
              name="type"
              type="text"
              value={user[index].roleType}
              readOnly
            ></FormControl>
            <FormLabel>Password</FormLabel>
            <FormControl
              onChange={this.onChangeInput}
              name="password"
              type="password"
            ></FormControl>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={this.handleEdit}>
              Add
            </Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddUser;
