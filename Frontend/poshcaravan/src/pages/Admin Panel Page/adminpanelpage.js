import React, { Component } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import ProductList from "../../components/Product List/productlist";
import CreateForm from "../../components/CreateForm/createform";
import HeaderLogo from "../../components/Headers/HeaderLogo";

import "./adminpanelpage.css";

/**
 * My component adminpanelpage that allows me to add a product
 *
 *
 */

class Adminpanelpage extends Component {
  constructor() {
    super();

    this.state = {
      modal: false
    };
  }

  /**
   * deletes a contact from the products list
   *
   */
  deleteProduct = async Product_ID => {
    console.log("here", Product_ID);
    try {
      const response = await fetch(
        `http://localhost:5000/products/delete/${Product_ID} `
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

  /**
   *
   *
   * @memberof Adminpanelpage
   */
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  /**
   * Renders the component.
   *
   *
   */
  render() {
    return (
      <>
        <HeaderLogo />
        <MDBContainer>
          <MDBBtn onClick={this.toggle} style={{ backgroundColor: "pink" }}>
            Add Product
          </MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>Add Product</MDBModalHeader>
            <MDBModalBody>
              <CreateForm />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>

        <ProductList EditMode={true} deleteProduct={this.deleteProduct} />
      </>
    );
  }
}

export default Adminpanelpage;
