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
        this.setState({ products });
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
      <div className="container">
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
          {/* <input
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
        </div> */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n* {\n  box-sizing: border-box;\n}\n\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  resize: vertical;\n}\n\nlabel {\n  padding: 12px 12px 12px 0px;\n  display: inline-block;\n}\n\ninput[type=submit], input[type=reset] {\n  background-color: #F7A597;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  float: right;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.container {\n  border-radius: 5px;\n  background-color: pink;\n  padding: 20px;\n}\n\n.col-25 {\n  float: left;\n  width: 25%;\n  margin-top: 6px;\n}\n\n.col-75 {\n  float: left;\n  width: 75%;\n  margin-top: 6px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .col-25, .col-75, input[type=submit] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n'
            }}
          />
          <div className="row">
            <div className="col-25">
              <label htmlFor="country">Category</label>
            </div>
            <div className="col-75">
              <select id="country" name="country">
                <option value="vintagecategories">Preloved</option>
                <option value="everythingnewcategories">Everything New</option>
                {/* <option value="usa">USA</option> */}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Product Price</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                onChange={evt =>
                  this.setState({ ProductName: evt.target.value })
                }
                value={this.state.ProductPrice}
                // placeholder="Your last name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Sale</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                onChange={evt => this.setState({ Sale: evt.target.value })}
                value={this.state.Sale}
                // placeholder="Your last name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Sale Percentage</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                onChange={evt =>
                  this.setState({ SalePercentage: evt.target.value })
                }
                value={this.state.SalePercentage}
                // placeholder="Your last name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Category_ID</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                onChange={evt =>
                  this.setState({ Category_Category_ID: evt.target.value })
                }
                value={this.state.Category_Category_ID}
                // placeholder="Your last name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Sub_Category</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                onChange={evt =>
                  this.setState({
                    SubCategory_SubCategory_ID: evt.target.value
                  })
                }
                value={this.state.SubCategory_SubCategory_ID}
                // placeholder="Your last name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Product Description</label>
            </div>
            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                // placeholder="Write something.."
                style={{ height: "200px" }}
                defaultValue={""}
                onChange={evt =>
                  this.setState({ ProductDescription: evt.target.value })
                }
                value={this.state.ProductDescription}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Upload</label>
            </div>
            <div className="col-75">
              <input
                type="file"
                id="lname"
                name="lastname"
                onChange={evt =>
                  this.setState({ ProductImage: evt.target.files[0] })
                }
                // placeholder="Your last name.."
              />
            </div>
          </div>
          <div className="row">
            <input type="submit" defaultValue="Submit" />
          </div>{" "}
          <div className="row">
            <input
              type="reset"
              defaultValue="Reset"
              style={{ width: "138px" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Adminpanelpage;
