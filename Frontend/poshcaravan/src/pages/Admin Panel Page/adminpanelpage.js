import React, { Component } from "react";
import ProductList from "../../components/Product List/productlist";
/**
 * My component adminpanelpage that allows me to add a product
 *
 *
 */

class Adminpanelpage extends Component {
  /**
   *
   *
   *
   */
  state = {
    ProductName: "",
    ProductDescription: "",
    ProductPrice: "",
    ProductImage: null,
    Sale: "",
    SalePercentage: "",
    Category_Category_ID: "",
    SubCategory_SubCategory_ID: ""
  };

  /**
   * creates a component with the given ProductName and ProductDescription and ProductPrice
   *
   *
   *
   *
   *
   */
  createProduct = async parameters => {
    const {
      ProductName,
      ProductDescription,
      ProductPrice,
      ProductImage,
      Sale,
      SalePercentage,
      Category_Category_ID,
      SubCategory_SubCategory_ID
    } = parameters;
    console.log("parameters", parameters);
    if (
      !parameters ||
      !(
        ProductName &&
        ProductDescription &&
        ProductPrice &&
        ProductImage &&
        Sale &&
        SalePercentage &&
        Category_Category_ID &&
        SubCategory_SubCategory_ID
      )
    ) {
      throw new Error(
        "You need to provide an ProductName and ProductDescription and ProductPrice and ProductImage and Sale and SalePercentage and Category_Category_ID and SubCategory_SubCategory_ID"
      );
    }
    this.setState({ isLoading: true });
    try {
      const body = new FormData();
      body.append("ProductImage", ProductImage);
      body.append("ProductName", ProductName);
      body.append("ProductDescription", ProductDescription);
      body.append("SalePercentage", SalePercentage);
      body.append("ProductPrice", ProductPrice);
      body.append("Sale", Sale);
      body.append("Category_Category_ID", Category_Category_ID);
      body.append("SubCategory_SubCategory_ID", SubCategory_SubCategory_ID);
      const response = await fetch(`http://localhost:5000/product/create`, {
        method: "POST",
        body
      });
      //   await pause();
      const answer = await response.json();
      /*  if (answer.success) {
        const new_product = {
          id: answer.result,
          ProductName,
          ProductDescription,
          ProductPrice,
          ProductImage,
          Sale,
          SalePercentage,
          Category_Category_ID,
          SubCategory_SubCategory_ID
        };
        const products = [...this.state.products, new_product];

        // toast(`Product was successfully added!`);
        this.setState({ products });
        console.log(this.props.match, this.props.history); */
      // this.props.history.push("/myproducts");
      /*       } else {
        this.setState({ error_message: answer.message, isLoading: false });
      } */
    } catch (err) {
      //   toast.error("error" + err);
      console.log(err, "error");
      this.setState({ error_message: err.message, isLoading: false });
    }
  };

  // *renders the Contact as view only

  renderView = () => {
    const { id } = this.props;
    return (
      <div className="Contact-container">
        {/* {token && user && user.user_id === user_id && ( */}
        <>
          {/* <button className="App-button" onClick={() => deleteContact(id)}>
            delete
          </button> */}
          <button className="App-button" onClick={this.toggleEditMode}>
            edit
          </button>
        </>
        )}
      </div>
    );
  };

  /**
   * deletes a contact from the products list
   *
   *
   *
   *
   *
   */
  deleteProduct = async Product_ID => {
    console.log("here", Product_ID);
    try {
      const response = await fetch(
        `http://localhost:5000/products/delete/${Product_ID} `
      );
      // await pause();
      const answer = await response.json();
      if (answer.success) {
        // toast(`contact with id ${Product_ID} was successfully deleted!`);
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

  onSubmit = e => {
    // const {name, email} = this.state;
    console.log("state", this.state);
    e.preventDefault();
    this.createProduct({
      ProductName: e.target.ProductName.value,
      ProductDescription: e.target.ProductDescription.value,
      ProductPrice: e.target.ProductPrice.value,
      ProductImage: e.target.ProductImage.files[0],
      Sale: e.target.Sale.value,
      SalePercentage: e.target.SalePercentage.value,
      Category_Category_ID: e.target.Category_Category_ID.value,
      SubCategory_SubCategory_ID: e.target.SubCategory_SubCategory_ID.value
    });
    /* this.setState({
      ProductName: "",
      ProductDescription: "",
      ProductPrice: "",
      ProductImage: null,
      Sale: "",
      SalePercentage: "",
      Category_Category_ID: "",
      SubCategory_SubCategory_ID: ""
    }); */
  };
  /**
   * Renders the component.
   *
   *
   *
   */
  render() {
    return (
      <>
        <form onSubmit={evt => this.onSubmit(evt)}>
          <input type="text" placeholder="ProductName" name="ProductName" />
          <input
            type="text"
            placeholder="ProductDescription"
            name="ProductDescription"
          />
          <input type="text" placeholder="ProductPrice" name="ProductPrice" />
          <input type="text" placeholder="Sale" name="Sale" />
          <input
            type="text"
            placeholder="SalePercentage"
            name="SalePercentage"
          />
          <input
            type="text"
            placeholder="Category_Category_ID"
            name="Category_Category_ID"
          />
          <input
            type="text"
            placeholder="SubCategory_SubCategory_ID"
            name="SubCategory_SubCategory_ID"
          />
          <input type="file" name="ProductImage" />

          <div>
            <input type="submit" value="ok" />
            <input type="reset" value="cancel" />
          </div>
        </form>
        <ProductList EditMode={true} deleteProduct={this.deleteProduct} />
      </>
    );
  }
}

export default Adminpanelpage;
