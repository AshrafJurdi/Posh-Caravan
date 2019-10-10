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
import SubCategoryEditForm from "../AdminSubcategory/EditForm/editform";

class ViewSubCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      Subcategories: [],
      subcategory: [],
      modal: false,
      modalUpdate: false
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

  toggle = subcategory => {
    this.setState({
      modal: !this.state.modal,
      subcategory: subcategory
    });
  };

  toggleUpdate = subcategory => {
    this.setState({
      modalUpdate: !this.state.modalUpdate,
      subcategory: subcategory
    });
    console.log(this.state.category);
  };

  deleteSubCategory = async SubCategory_ID => {
    console.log("Category ID:", SubCategory_ID);
    try {
      const response = await fetch(
        `http://localhost:5000/subcategories/delete/${SubCategory_ID} `
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
                  onClick={() => this.toggle(subcategory)}
                  style={{ marginRight: "10%" }}
                ></i>
                <i
                  class="far fa-edit"
                  onClick={() => this.toggleUpdate(subcategory)}
                ></i>
              </div>
            </div>
          );
        })}
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
                  this.deleteSubCategory(this.state.subcategory.SubCategory_ID);
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
              <SubCategoryEditForm subcategory={this.state.subcategory} />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggleUpdate}>
                Cancel
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </ul>
    );
  }
}

export default ViewSubCategories;
