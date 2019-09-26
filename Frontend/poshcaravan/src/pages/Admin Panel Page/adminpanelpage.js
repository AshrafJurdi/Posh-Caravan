import React, { Component } from "react";

/**
 * My component AddContactForm that allows me to create a contact
 *
 * @module AddContactForm
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
      Sale,
      SalePercentage,
      Category_Category_ID,
      SubCategory_SubCategory_ID
    } = parameters;
    if (
      !parameters ||
      (ProductName,
      ProductDescription,
      ProductPrice,
      Sale,
      SalePercentage,
      Category_Category_ID,
      SubCategory_SubCategory_ID)
    ) {
      throw new Error(
        "You need to provide an ProductName and ProductDescription and ProductPrice and Sale and SalePercentage and Category_Category_ID and SubCategory_SubCategory_ID"
      );
    }
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        `http://localhost:8080/contacts/new?email=${email}&name=${name}&token=${this.state.token}&user_id=${this.state.user.user_id}`
      );
      await pause();
      const answer = await response.json();
      if (answer.success) {
        const new_product = {
          id: answer.result,
          ProductName,
          ProductDescription,
          ProductPrice,
          Sale,
          SalePercentage,
          Category_Category_ID,
          SubCategory_SubCategory_ID
        };
        const products = [...this.state.products];
        products.push(new_product);
        toast(`Product was successfully added!`);
        this.setState({ products, isLoading: false, error_message: "" });
        console.log(this.props.match, this.props.history);
        // this.props.history.push("/mycontacts");
      } else {
        this.setState({ error_message: answer.message, isLoading: false });
      }
    } catch (err) {
      toast.error("error" + err);
      this.setState({ error_message: err.message, isLoading: false });
    }
  };

  /**
   * creates a component with the given email and name
   *
   *
   *
   *
   *
   *
   */
  onSubmit = (
    ProductName,
    ProductDescription,
    ProductPrice,
    Sale,
    SalePercentage,
    Category_Category_ID,
    SubCategory_SubCategory_ID,
    e
  ) => {
    // const {name, email} = this.state;
    e.preventDefault();
    this.AddProduct({
      ProductName,
      ProductDescription,
      ProductPrice,
      Sale,
      SalePercentage,
      Category_Category_ID,
      SubCategory_SubCategory_ID
    });
    this.setState({
      ProductName: "",
      ProductDescription: "",
      ProductPrice: "",
      Sale: "",
      SalePercentage: "",
      Category_Category_ID: "",
      SubCategory_SubCategory_ID: ""
    });
  };
  /**
   * Renders the component.
   * @function render
   * @return {ReactElement} markup
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
        <div>
          <input type="submit" value="ok" />
          <input type="reset" value="cancel" />
        </div>
        //{" "}
      </form>
    );
  }
}

export default Adminpanelpage;
