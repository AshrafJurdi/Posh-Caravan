import React, { Component } from "react";

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
      if (answer.success) {
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
        this.setState({ products, isLoading: false, error_message: "" });
        console.log(this.props.match, this.props.history);
        // this.props.history.push("/myproducts");
      } else {
        this.setState({ error_message: answer.message, isLoading: false });
      }
    } catch (err) {
      //   toast.error("error" + err);
      console.log(err, "error");
      this.setState({ error_message: err.message, isLoading: false });
    }
  };

  // *renders the Contact as view only

  renderView = () => {
    const { id, name, email, deleteContact, token, user, user_id } = this.props;
    return (
      <div className="Contact-container">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{email}</p>
        {token && user && user.user_id === user_id && (
          <>
            <button className="App-button" onClick={() => deleteContact(id)}>
              delete
            </button>
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
    try {
      const response = await fetch(
        `http://localhost:5000/products/delete/${Product_ID} `
      );
      // await pause();
      const answer = await response.json();
      if (answer.success) {
        const products = this.state.products.filter(
          contact => contact.id !== Product_ID
        );
        // toast(`contact with id ${Product_ID} was successfully deleted!`);
        this.setState({ products, isLoading: false, error_message: "" });
      } else {
        console.log();
        this.setState({ error_message: answer.message, isLoading: false });
      }
    } catch (err) {
      console.log("error", err);
      this.setState({ error_message: err.message, isLoading: false });
    }
  };

  onSubmit = (
    ProductName,
    ProductDescription,
    ProductPrice,
    ProductImage,
    Sale,
    SalePercentage,
    Category_Category_ID,
    SubCategory_SubCategory_ID,
    e
  ) => {
    // const {name, email} = this.state;
    console.log("state", this.state);
    e.preventDefault();
    this.createProduct({
      ProductName,
      ProductDescription,
      ProductPrice,
      ProductImage,
      Sale,
      SalePercentage,
      Category_Category_ID,
      SubCategory_SubCategory_ID
    });
    this.setState({
      ProductName: "",
      ProductDescription: "",
      ProductPrice: "",
      ProductImage: null,
      Sale: "",
      SalePercentage: "",
      Category_Category_ID: "",
      SubCategory_SubCategory_ID: ""
    });
  };
  /**
   * Renders the component.
   *
   *
   *
   */
  render() {
    return (
      <form
        onSubmit={evt =>
          this.onSubmit(
            this.state.ProductName,
            this.state.ProductDescription,
            this.state.ProductPrice,
            this.state.ProductImage,
            this.state.Sale,
            this.state.SalePercentage,
            this.state.Category_Category_ID,
            this.state.SubCategory_SubCategory_ID,
            evt
          )
        }
        onReset={() => {
          this.setState({
            ProductName: "",
            ProductDescription: "",
            ProductPrice: "",
            ProductImage: null,
            Sale: "",
            SalePercentage: "",
            Category_Category_ID: "",
            SubCategory_SubCategory_ID: ""
          });
        }}
      >
        <input
          type="text"
          placeholder="ProductName"
          onChange={evt => this.setState({ ProductName: evt.target.value })}
          value={this.state.ProductName}
        />
        <input
          type="text"
          placeholder="ProductDescription"
          onChange={evt =>
            this.setState({ ProductDescription: evt.target.value })
          }
          value={this.state.ProductDescription}
        />
        <input
          type="text"
          placeholder="ProductPrice"
          onChange={evt => this.setState({ ProductPrice: evt.target.value })}
          value={this.state.ProductPrice}
        />
        <input
          type="text"
          placeholder="Sale"
          onChange={evt => this.setState({ Sale: evt.target.value })}
          value={this.state.Sale}
        />
        <input
          type="text"
          placeholder="SalePercentage"
          onChange={evt => this.setState({ SalePercentage: evt.target.value })}
          value={this.state.SalePercentage}
        />
        <input
          type="text"
          placeholder="Category_Category_ID"
          onChange={evt =>
            this.setState({ Category_Category_ID: evt.target.value })
          }
          value={this.state.Category_Category_ID}
        />
        <input
          type="text"
          placeholder="SubCategory_SubCategory_ID"
          onChange={evt =>
            this.setState({ SubCategory_SubCategory_ID: evt.target.value })
          }
          value={this.state.SubCategory_SubCategory_ID}
        />
        <input
          type="file"
          onChange={evt => this.setState({ ProductImage: evt.target.files[0] })}
        />

        <div>
          <input type="submit" value="ok" />
          <input type="reset" value="cancel" />
        </div>
      </form>
    );
  }
}

export default Adminpanelpage;
