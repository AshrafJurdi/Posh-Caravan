import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import AddFormUser from "../AdminUser/AddForm/addform";

class AddUser extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBBtn
          onClick={this.props.toggleUser}
          style={{ backgroundColor: "pink" }}
        >
          Add User
        </MDBBtn>
        <MDBModal
          isOpen={this.props.state.modalUser}
          toggle={this.props.toggleUser}
        >
          <MDBModalHeader toggle={this.props.toggleUser}>
            Add User
          </MDBModalHeader>
          <MDBModalBody>
            <AddFormUser />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggleUser}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default AddUser;
