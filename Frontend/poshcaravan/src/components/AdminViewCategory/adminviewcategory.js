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
import "../ProductCard/ProductCard.css";
import CategoryEditForm from "../AdminCategory/Edit Form/editform";
class ViewCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      modal: false,
      modalUpdate: false,
      category: []
    };
  }

  toggle = category => {
    this.setState({
      modal: !this.state.modal,
      category: category
    });
  };

  toggleUpdate = category => {
    this.setState({
      modalUpdate: !this.state.modalUpdate,
      category: category
    });
    console.log(this.state.category);
  };

  async componentDidMount() {
    try {
      const responseCategories = await fetch(
        "http://localhost:5000/categories"
      );
      const categories = await responseCategories.json();
      this.setState({ categories });
      console.log("Categories==>", categories);
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  }

  deleteCategory = async Category_ID => {
    console.log("Category ID:", Category_ID);
    try {
      const response = await fetch(
        `http://localhost:5000/categories/delete/${Category_ID} `
      );
      const answer = await response.json();
      if (answer.success) {
        this.setState({ isLoading: false, error_message: "" });
      } else {
        console.log();
        this.setState({ error_message: answer.message, isLoading: false });
      }
    } catch (err) {
      console.log("error", err);
      this.setState({ error_message: err.message, isLoading: false });
    }
  };
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {this.state.categories.map(category => {
          return (
            <>
              <div style={{ display: "flex", flexDirection: "column" }}>
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
                      src={`http://localhost:5000/Images/${category.CategoryImage}`}
                    />
                  </div>
                  <div className="stripe dark">
                    <p>{category.CategoryName}</p>
                  </div>
                </MDBCard>
                <div className="trash-edit-container">
                  <i
                    className="far fa-trash-alt"
                    onClick={() => this.toggle(category)}
                  ></i>
                  <i
                    class="far fa-edit"
                    onClick={() => this.toggleUpdate(category)}
                  ></i>
                </div>
              </div>
            </>
          );
        })}
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
                  this.deleteCategory(this.state.category.Category_ID);
                  this.toggle();
                }}
              >
                Delete
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>

        <MDBContainer>
          <MDBModal isOpen={this.state.modalUpdate} toggle={this.toggleUpdate}>
            <MDBModalBody>
              <CategoryEditForm category={this.state.category} />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggleUpdate}>
                Cancel
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}

export default ViewCategories;
