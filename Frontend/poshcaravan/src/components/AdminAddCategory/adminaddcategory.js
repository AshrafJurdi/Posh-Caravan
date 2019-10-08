import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import AddForm from "../AdminCategory/AddForm/addform";

class AddCategory extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBBtn
          onClick={this.props.toggleCategory}
          style={{ backgroundColor: "pink" }}
        >
          Add Category
        </MDBBtn>
        <MDBModal
          isOpen={this.props.state.modalCategory}
          toggle={this.props.toggleCategory}
        >
          <MDBModalHeader toggle={this.props.toggleCategory}>
            Add Category
          </MDBModalHeader>
          <MDBModalBody>
            <AddForm />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggleCategory}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default AddCategory;
