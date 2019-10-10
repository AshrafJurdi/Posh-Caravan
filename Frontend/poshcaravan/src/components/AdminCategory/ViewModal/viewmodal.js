import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import ViewCategories from "../../AdminViewCategory/adminviewcategory";

class ViewCategory extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBBtn
          onClick={this.props.toggleCategories}
          style={{ backgroundColor: "pink" }}
        >
          Categories
        </MDBBtn>
        <MDBModal
          isOpen={this.props.state.modalCategories}
          toggle={this.props.toggleCategories}
        >
          <MDBModalHeader toggle={this.props.toggleCategories}>
            Categories
          </MDBModalHeader>
          <MDBModalBody>
            <ViewCategories />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.toggleCategories}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ViewCategory;
