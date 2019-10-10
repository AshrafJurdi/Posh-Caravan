import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import ViewUsers from "../../AdminViewUsers/adminviewusers";

class ViewUser extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBBtn
          onClick={this.props.toggleUsers}
          style={{ backgroundColor: "pink" }}
        >
          Users
        </MDBBtn>
        <MDBModal
          isOpen={this.props.state.modalUsers}
          toggle={this.props.toggleUsers}
        >
          <MDBModalHeader toggle={this.props.toggleUsers}>Users</MDBModalHeader>
          <MDBModalBody>
            <ViewUsers />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggleUsers}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ViewUser;
