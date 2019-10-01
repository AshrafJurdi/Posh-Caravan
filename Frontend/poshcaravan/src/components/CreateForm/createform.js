import React from "react";
import { MDBInput, MDBFormInline } from "mdbreact";
import "./createform.css";

class CreateForm extends React.Component {
  constructor() {
    super();

    this.state = {
      ProductName: "",
      ProductDescription: "",
      ProductPrice: "",
      ProductImage: null,
      Sale: "",
      SalePercentage: null,
      mainCategory: null,
      Category_Category_ID: null,
      SubCategory_SubCategory_ID: 1,
      categories: [],
      Subcategories: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    try {
      const responseCategories = await fetch(
        "http://localhost:5000/categories"
      );
      const responseSubcategories = await fetch(
        "http://localhost:5000/subcategories"
      );
      const categories = await responseCategories.json();
      const Subcategories = await responseSubcategories.json();
      this.setState({ categories, Subcategories });
      console.log("Categories==>", categories);
      console.log("Sub Categories==>", Subcategories);
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("Category:", this.state.Category_Category_ID);
    console.log("Subcategory:", this.state.SubCategory_SubCategory_ID);
    console.log("name:", event.target.name);
    console.log("sale:", this.state.Sale);
    console.log("state", this.state);
  };

  onChangeHandler = e => {
    this.setState({
      ProductImage: e.target.files[0]
    });
  };

  onClick = nr => () => {
    if (nr === 1) {
      var cat = this.state.categories.find(function(element) {
        return element.MainCategory_MainCategory_ID === 1;
      });
      this.setState({
        mainCategory: nr,
        Category_Category_ID: cat.Category_ID
      });
    } else {
      var cat2 = this.state.categories.find(function(element) {
        return element.MainCategory_MainCategory_ID === 2;
      });
      this.setState({
        mainCategory: nr,
        Category_Category_ID: cat2.Category_ID
      });
    }
  };

  /**
   * creates a component with the given ProductName and ProductDescription and ProductPrice
   *
   *
   */
  createProduct = async parameters => {
    let {
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
    // if (
    //   !parameters ||
    //   !(
    //     ProductName &&
    //     ProductDescription &&
    //     ProductPrice &&
    //     ProductImage &&
    //     Sale &&
    //     SalePercentage &&
    //     Category_Category_ID &&
    //     SubCategory_SubCategory_ID
    //   )
    // ) {
    //   alert(
    //     "You need to provide an ProductName and ProductDescription and ProductPrice and ProductImage and Sale and SalePercentage and Category_Category_ID and SubCategory_SubCategory_ID"
    //   );
    // }
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
      const answer = await response.json();
      window.location.reload();
    } catch (err) {
      console.log(err, "error");
    }
  };

  changeCategory = num => {
    console.log("hello", num);
    this.setState({ Category_Category_ID: num });
  };

  /**
   *
   */
  onSubmit = e => {
    console.log("state", this.state);
    e.preventDefault();
    this.createProduct({
      ProductName: this.state.ProductName,
      ProductDescription: this.state.ProductDescription,
      ProductPrice: this.state.ProductPrice,
      ProductImage: this.state.ProductImage,
      Sale: this.state.Sale,
      SalePercentage: this.state.SalePercentage,
      Category_Category_ID: this.state.Category_Category_ID,
      SubCategory_SubCategory_ID: this.state.SubCategory_SubCategory_ID
    });
    console.log(this.state);
  };
  render() {
    let cat_default = false;
    return (
      <form className="form-group1" onSubmit={e => this.onSubmit(e)}>
        <MDBInput
          label="Product Name"
          outline
          size="lg"
          type="text"
          name="ProductName"
          required
          onChange={this.handleChange}
        />
        <MDBInput
          type="textarea"
          label="Description"
          outline
          size="lg"
          name="ProductDescription"
          required
          onChange={this.handleChange}
        />
        <label>
          Upload Image <br />
          <input
            type="file"
            name="ProductImage"
            onChange={this.onChangeHandler}
            required
          />
        </label>
        <br />
        <h4 styl>Main Category</h4>
        <MDBFormInline style={{ justifyContent: "center", width: "100%" }}>
          <MDBInput
            onClick={this.onClick(2)}
            checked={this.state.mainCategory === 2 ? true : false}
            label="Everything New"
            type="radio"
            id="radio1"
            required
          />
          <MDBInput
            onClick={this.onClick(1)}
            checked={this.state.mainCategory === 1 ? true : false}
            label="Vintage & Preloved"
            type="radio"
            id="radio2"
          />
        </MDBFormInline>
        <br />
        <label>
          Category
          <select
            className="browser-default custom-select"
            value={this.state.Category_Category_ID}
            name="Category_Category_ID"
            onChange={this.handleChange}
            required
          >
            {this.state.mainCategory === 1
              ? this.state.categories.map(category => {
                  if (category.MainCategory_MainCategory_ID === 1) {
                    return (
                      <option value={category.Category_ID}>
                        {category.CategoryName}
                      </option>
                    );
                  }
                })
              : this.state.categories.map(category => {
                  if (category.MainCategory_MainCategory_ID === 2) {
                    return (
                      <option value={category.Category_ID}>
                        {category.CategoryName}
                      </option>
                    );
                  }
                })}
          </select>
        </label>
        <br />
        <br />
        <label>
          Sub-Category
          <select
            className="browser-default custom-select"
            name="SubCategory_SubCategory_ID"
            value={this.state.SubCategory_SubCategory_ID}
            onChange={this.handleChange}
            required
          >
            {this.state.Subcategories.map(subcategory => {
              return (
                <option value={subcategory.SubCategory_ID}>
                  {subcategory.SubCategoryName}
                </option>
              );
            })}
          </select>
        </label>
        <br />

        <MDBInput
          label="Price"
          outline
          size="lg"
          type="text"
          name="ProductPrice"
          onChange={this.handleChange}
          append={<span className="input-group-text">€</span>}
          required
        />

        <label>
          Sale
          <select
            className="browser-default custom-select"
            name="Sale"
            value={this.state.Sale}
            onChange={this.handleChange}
            required
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </label>
        <br />

        <MDBInput
          label="Sale Percentage"
          outline
          size="lg"
          type="text"
          name="SalePercentage"
          onChange={this.handleChange}
          append={<span className="input-group-text">%</span>}
        />

        <br />
        <div>
          <input type="submit" value="Create" />
        </div>
      </form>
    );
  }
}

export default CreateForm;
