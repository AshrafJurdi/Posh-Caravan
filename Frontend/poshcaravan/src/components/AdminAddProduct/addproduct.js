import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import CreateForm from "../CreateForm/createform";

class AddProduct extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.props.toggle} style={{ backgroundColor: "pink" }}>
          Add Product
        </MDBBtn>
        <MDBModal isOpen={this.props.state.modal} toggle={this.props.toggle}>
          <MDBModalHeader toggle={this.props.toggle}>
            Add Product
          </MDBModalHeader>
          <MDBModalBody>
            <CreateForm />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggle}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default AddProduct;
