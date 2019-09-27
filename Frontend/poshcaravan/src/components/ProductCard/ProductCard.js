import React from "react";
import { MDBCard, MDBCardImage, MDBIcon } from "mdbreact";
import "./ProductCard.css";

class ProductCard extends React.Component {
  render() {
    return (
      <div className="Card1">
        <MDBCard
          className="mx-4"
          style={{ width: "15rem", height: "23rem" }}
          collection
        >
          <div className="imagecard">
            <MDBCardImage
              className="img-fluid"
              zoom
              src={`http://localhost:5000/Images/${this.props.product.ProductImage}`}
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
      </div>
    );
  }
}
export default ProductCard;
