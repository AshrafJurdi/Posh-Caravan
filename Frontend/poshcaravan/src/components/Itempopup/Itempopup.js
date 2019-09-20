import React, { Component } from "react";
import "./Itempopup.css";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

class ModalPage extends Component {
  render() {
    return (
      this.props.product && (
        <MDBContainer>
          <MDBModal
            isOpen={this.props.show}
            toggle={this.props.toggle}
            centered
          >
            <MDBModalHeader toggle={() => this.props.toggle(null)}>
              MDBModal title
            </MDBModalHeader>
            <MDBCol>
              <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src={this.props.product.Picture}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>{this.props.product.Title}</MDBCardTitle>
                  <MDBCardText>{this.props.product.Description}</MDBCardText>
                  <button onClick={() => this.props.toggle(null)}>
                    MDBBtn
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBModal>
        </MDBContainer>
      )
    );
  }
}

export default ModalPage;
