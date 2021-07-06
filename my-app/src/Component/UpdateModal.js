import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


export class UpdateModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updateData}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  defaultValue={this.props.modalData.name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
                  name="url"
                  defaultValue={this.props.modalData.url}
                />
              </Form.Group>

              <button className="btn btn-primary">Submit</button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdateModal;
