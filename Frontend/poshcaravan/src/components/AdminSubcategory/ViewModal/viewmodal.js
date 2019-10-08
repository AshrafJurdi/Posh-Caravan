import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import ViewSubCategories from "../../AdminViewSubCategory/adminviewsubcategory";

class ViewSubCategory extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBBtn
          onClick={this.props.toggleSubCategories}
          style={{ backgroundColor: "pink" }}
        >
          Sub-Categories
        </MDBBtn>
        <MDBModal
          isOpen={this.props.state.modalSubCategories}
          toggle={this.props.toggleSubCategories}
        >
          <MDBModalHeader toggle={this.props.toggleSubCategories}>
            Sub-Categories
          </MDBModalHeader>
          <MDBModalBody>
            <ViewSubCategories />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggleSubCategories}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ViewSubCategory;
