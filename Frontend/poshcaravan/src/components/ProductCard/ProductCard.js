import React from "react";
import { MDBCard, MDBCardImage, MDBIcon } from "mdbreact";
import "../Product List/productlist.css";

class ProductCard extends React.Component {
  render() {
    return (
      <div className="Card1">
        <MDBCard className="mx-4" style={{ width: "15rem" }} collection>
          <MDBCardImage
            className="img-fluid"
            zoom
            src={this.props.product.Picture}
          />
          <div
            className="stripe dark"
            onClick={() => this.props.toggle(this.props.product.ID)}
          >
            
              <p>
                {this.props.product.Title}
                <MDBIcon icon="chevron-right" />
              </p>
           
          </div>
        </MDBCard>
      </div>
    );
  }
}
export default ProductCard;
