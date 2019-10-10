import React, { Component } from "react";
import AddProduct from "../../components/AdminAddProduct/addproduct";
import ProductList from "../../components/Product List/productlist";
import AdminFilter from "../../components/AdminPanelFilter/adminpanelfilter";
import AddCategory from "../../components/AdminAddCategory/adminaddcategory";
import AddSubCategory from "../../components/AdminAddSubCategory/adminaddsubcategory";
import AddUser from "../../components/AdminAddUser/adminadduser";
import ViewSubCategory from "../../components/AdminSubcategory/ViewModal/viewmodal";
import ViewCategory from "../../components/AdminCategory/ViewModal/viewmodal";
import ViewUser from "../../components/AdminUser/ViewModal/viewmodal";

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
      modal: false,
      modalCategory: false,
      modalSubCategory: false,
      modalSubCategories: false,
      modalCategories: false,
      modalUsers: false,
      modalUser: false,
      mainCategory: 0,
      category: 0,
      subCategory: 0
    };
  }

  handleMainCategory = id => {
    console.log("handlemain cat", id);
    if (id == 0)
      this.setState({ mainCategory: id, category: 0, subCategory: 0 });
    else this.setState({ mainCategory: id });
  };

  handleCategory = id => {
    console.log("handle cat", id);
    if (id == 0) this.setState({ category: id, subCategory: 0 });
    else this.setState({ category: id });
  };

  handleSubCategory = id => {
    console.log("handle subcat", id);
    this.setState({ subCategory: id });
  };
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
   *
   *
   * @memberof Adminpanelpage
   */
  toggleCategory = () => {
    this.setState({
      modalCategory: !this.state.modalCategory
    });
  };

  /**
   *
   *
   * @memberof Adminpanelpage
   */
  toggleSubCategory = () => {
    this.setState({
      modalSubCategory: !this.state.modalSubCategory
    });
  };

  /**
   *
   *
   * @memberof Adminpanelpage
   */
  toggleUser = () => {
    this.setState({
      modalUser: !this.state.modalUser
    });
  };

  /**
   *
   *
   * @memberof Adminpanelpage
   */
  toggleSubCategories = () => {
    this.setState({
      modalSubCategories: !this.state.modalSubCategories
    });
  };

  /**
   *
   *
   * @memberof Adminpanelpage
   */
  toggleCategories = () => {
    this.setState({
      modalCategories: !this.state.modalCategories
    });
  };

  /**
   *
   *
   * @memberof Adminpanelpage
   */
  toggleUsers = () => {
    this.setState({
      modalUsers: !this.state.modalUsers
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
        <div className="buttons-container-admin">
          <AddCategory
            toggleCategory={this.toggleCategory}
            state={this.state}
          />
          <AddSubCategory
            toggleSubCategory={this.toggleSubCategory}
            state={this.state}
          />
          <AddUser toggleUser={this.toggleUser} state={this.state} />
          <AddProduct toggle={this.toggle} state={this.state} />
          <ViewSubCategory
            toggleSubCategories={this.toggleSubCategories}
            state={this.state}
          />
          <ViewCategory
            toggleCategories={this.toggleCategories}
            state={this.state}
          />
          <ViewUser toggleUsers={this.toggleUsers} state={this.state} />
        </div>
        <AdminFilter
          handleMainCategory={this.handleMainCategory}
          handleCategory={this.handleCategory}
          handleSubCategory={this.handleSubCategory}
          mainCategory={this.state.mainCategory}
          category={this.state.category}
          subCategory={this.state.subCategory}
        />
        <ProductList
          EditMode={true}
          deleteProduct={this.deleteProduct}
          mainCategory={this.state.mainCategory}
          category={this.state.category}
          subCategory={this.state.subCategory}
        />
      </>
    );
  }
}

export default Adminpanelpage;
