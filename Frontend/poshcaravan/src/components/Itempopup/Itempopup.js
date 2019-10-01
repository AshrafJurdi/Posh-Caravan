import React, { Component } from "react";
import "./Itempopup.css";
import { MDBContainer, MDBModal, MDBModalHeader, MDBCol } from "mdbreact";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import EditForm from "../EditForm/editform";

class ModalPage extends Component {
  render() {
    return (
      <div>
        {this.props.EditMode === false
          ? this.props.product && (
              <MDBContainer className="popuptext">
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
                            src={`http://localhost:5000/Images/${this.props.product.ProductImage}`}
                            className="img-fluid"
                          />
                        </Col>
                        <Col md={6}>
                          <h1 className="Title">
                            {this.props.product.ProductName}
                          </h1>
                          <h3 className="Description">
                            {this.props.product.ProductDescription}
                          </h3>
                          <h3>{this.props.product.ProductPrice}</h3>
                        </Col>
                      </Row>
                    </Container>
                  </MDBCol>
                </MDBModal>
              </MDBContainer>
            )
          : this.props.product && (
              <MDBContainer className="popuptext">
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
                            src={`http://localhost:5000/Images/${this.props.product.ProductImage}`}
                            className="img-fluid"
                          />
                        </Col>
                        <EditForm product={this.props.product} />
                      </Row>
                    </Container>
                  </MDBCol>
                </MDBModal>
              </MDBContainer>
            )}
      </div>
    );
  }
}

export default ModalPage;
