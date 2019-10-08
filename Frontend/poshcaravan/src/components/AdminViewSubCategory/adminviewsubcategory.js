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

class ViewSubCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      Subcategories: []
    };
  }
  async componentDidMount() {
    try {
      const responseSubcategories = await fetch(
        "http://localhost:5000/subcategories"
      );
      const Subcategories = await responseSubcategories.json();
      this.setState({ Subcategories });
      console.log("Sub Categories==>", Subcategories);
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <ul class="list-group">
        {this.state.Subcategories.map(subcategory => {
          return (
            <div
              className="subcategory-list"
              style={{ display: "flex", alignItems: "center" }}
            >
              <li class="list-group-item" style={{ width: "90%" }}>
                {subcategory.SubCategoryName}
              </li>
              <div style={{ width: "10%" }}>
                <i
                  className="far fa-trash-alt"
                  onClick={this.toggle}
                  style={{ marginRight: "10%" }}
                ></i>
                <i
                  class="far fa-edit"
                  onClick={() =>
                    this.props.toggle(this.props.product.Product_ID, true)
                  }
                ></i>
                <MDBContainer>
                  <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalBody>
                      Are you sure you want to delete this Sub-Category?
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={this.toggle}>
                        Cancel
                      </MDBBtn>
                      <MDBBtn
                        onClick={() => {
                          this.props.deleteProduct(
                            this.props.product.Product_ID
                          );
                          this.toggle();
                        }}
                      >
                        Delete
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModal>
                </MDBContainer>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ViewSubCategories;
