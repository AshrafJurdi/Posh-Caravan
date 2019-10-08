import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import AddFormSubCat from "../AdminSubcategory/AddForm/addform";

class AddSubCategory extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBBtn
          onClick={this.props.toggleSubCategory}
          style={{ backgroundColor: "pink" }}
        >
          Add Sub-Category
        </MDBBtn>
        <MDBModal
          isOpen={this.props.state.modalSubCategory}
          toggle={this.props.toggleSubCategory}
        >
          <MDBModalHeader toggle={this.props.toggleSubCategory}>
            Add Sub-Category
          </MDBModalHeader>
          <MDBModalBody>
            <AddFormSubCat />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggleSubCategory}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default AddSubCategory;
