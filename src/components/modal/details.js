import React, { Component } from "react";
import { Modal, Button, FormControl, FormLabel } from "react-bootstrap";

class DetailUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
  render() {
    const user = this.props.user;
    const index = this.props.index;
    return (
      <>
        <Button size="sm" variant="info" onClick={this.handleShow}>
          Detail
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>View Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormLabel>Nama</FormLabel>
            <FormControl
              type="text"
              value={user[index].name}
              readOnly
            ></FormControl>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              value={user[index].username}
              readOnly
            ></FormControl>
            <FormLabel>Tipe Akun</FormLabel>
            <FormControl
              type="text"
              value={user[index].roleType}
              readOnly
            ></FormControl>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default DetailUser;
