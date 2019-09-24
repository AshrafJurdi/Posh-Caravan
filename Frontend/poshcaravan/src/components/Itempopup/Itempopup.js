import React, { Component } from "react";
import "./Itempopup.css";
import {
  MDBContainer,
  MDBModal,
  MDBModalHeader,
  MDBCol
} from "mdbreact";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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
            <MDBModalHeader
              toggle={() => this.props.toggle(null)}
            ></MDBModalHeader>
            <MDBCol>
              <Container>
                <Row>
                  <Col md={6}>
                    <img
                      src={this.props.product.Picture}
                      className="img-fluid"
                    />
                  </Col>
                  <Col md={6}>
                    <h1 className="Title">{this.props.product.Title}</h1>
                    <h3 className="Description">{this.props.product.Description}</h3>
                    <h3 >{this.props.product.Price}</h3>
                  </Col>
                </Row>
              </Container>
            </MDBCol>
          </MDBModal>
        </MDBContainer>
      )
    );
  }
}

export default ModalPage;
