import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";

import "./ProductCard.css";

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      EditMode: false,
      modal: false
    };
  }
  componentDidMount(props) {
    if (this.props.EditMode === true) {
      this.setState({ EditMode: this.props.EditMode });
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  /**
   *below is a card that renders image, and title of a product
   *
   * @returns Card
   * @memberof ProductCard
   */
  render() {
    return (
      <div className="Card1">
        {this.state.EditMode === false ? (
          <MDBCard
            className="product-card-1 mx-4"
            style={{ width: "15rem", height: "23rem" }}
            collection
          >
            <div className="imagecard">
              <MDBCardImage
                className="img-fluid imgProductCard"
                zoom
                style={{ maxHeight: "56vh" }}
                src={`${process.env.REACT_APP_APP_URL}/Images/${this.props.product.ProductImage}`}
              />
            </div>
            <div
              className="stripe dark"
              onClick={() => this.props.toggle(this.props.product.Product_ID)}
            >
              <p>
                {this.props.product.ProductName}
                {/* <MDBIcon icon="chevron-right" /> */}
              </p>
            </div>
          </MDBCard>
        ) : (
          <>
            <MDBCard
              className="product-card-1 mx-4"
              style={{ width: "15rem", height: "23rem" }}
              collection
            >
              <div className="imagecard">
                <MDBCardImage
                  className="img-fluid imgProductCard"
                  zoom
                  style={{ maxHeight: "56vh" }}
                  src={`${process.env.REACT_APP_APP_URL}/Images/${this.props.product.ProductImage}`}
                />
              </div>
              <div
                className="stripe dark"
                onClick={() => this.props.toggle(this.props.product.Product_ID)}
              >
                <p>
                  {this.props.product.ProductName}
                  {/* <MDBIcon icon="chevron-right" /> */}
                </p>
              </div>
            </MDBCard>
            <div className="trash-edit-container">
              <i className="far fa-trash-alt" onClick={this.toggle}></i>
              <i
                className="far fa-edit"
                onClick={() =>
                  this.props.toggle(this.props.product.Product_ID, true)
                }
              ></i>
            </div>
            <MDBContainer>
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalBody>
                  Are you sure you want to delete this product?
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={this.toggle}>
                    Cancel
                  </MDBBtn>
                  <MDBBtn
                    onClick={() => {
                      this.props.deleteProduct(this.props.product.Product_ID);
                      this.toggle();
                    }}
                  >
                    Delete
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            </MDBContainer>
          </>
        )}
      </div>
    );
  }
}
export default ProductCard;
