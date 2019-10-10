import React from "react";
import { MDBInput, MDBFormInline } from "mdbreact";
import "../../CreateForm/createform.css";

class AddForm extends React.Component {
  constructor() {
    super();

    this.state = {
      CategoryName: null,
      CategoryImage: null,
      MainCategory_MainCategory_ID: null,
      mainCategory: null,
      maincategories: [],
      categories: [],
      Subcategories: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    try {
      const responseCategories = await fetch(
        `${process.env.REACT_APP_APP_URL}/categories`
      );
      const responseSubcategories = await fetch(
        `${process.env.REACT_APP_APP_URL}/subcategories`
      );
      const responseMainCategories = await fetch(
        `${process.env.REACT_APP_APP_URL}/maincategories`
      );
      const categories = await responseCategories.json();
      const Subcategories = await responseSubcategories.json();
      const maincategories = await responseMainCategories.json();
      this.setState({ categories, Subcategories, maincategories });
      console.log("Categories==>", categories);
      console.log("Sub Categories==>", Subcategories);
      console.log("Main Categories==>", maincategories);
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("Category:", this.state.CategoryName);
    console.log("Subcategory:", this.state.CategoryImage);
    console.log("Maincategory:", this.state.MainCategory_MainCategory_ID);
    console.log("state", this.state);
  };

  onChangeHandler = e => {
    this.setState({
      CategoryImage: e.target.files[0]
    });
  };

  /**
   *
   *
   *
   */
  createCategory = async parameters => {
    let {
      CategoryName,
      CategoryImage,
      MainCategory_MainCategory_ID
    } = parameters;

    console.log("parameters", parameters);

    try {
      const body = new FormData();
      body.append("CategoryName", CategoryName);
      body.append("CategoryImage", CategoryImage);
      body.append("MainCategory_MainCategory_ID", MainCategory_MainCategory_ID);

      const response = await fetch(`${process.env.REACT_APP_APP_URL}/category/create`, {
        method: "POST",
        body
      });
      const answer = await response.json();
      window.location.reload();
    } catch (err) {
      console.log(err, "error");
    }
  };

  /**
   *
   */
  onSubmit = e => {
    console.log("state", this.state);
    e.preventDefault();
    if (!this.state.MainCategory_MainCategory_ID) {
      alert("Choose Main Category!");
    }
    this.createCategory({
      CategoryName: this.state.CategoryName,
      CategoryImage: this.state.CategoryImage,
      MainCategory_MainCategory_ID: this.state.MainCategory_MainCategory_ID
    });
    console.log(this.state);
  };
  render() {
    let cat_default = false;
    return (
      <form className="form-group1" onSubmit={e => this.onSubmit(e)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <MDBInput
            label="Category Name"
            outline
            size="lg"
            type="text"
            name="CategoryName"
            required
            onChange={this.handleChange}
          />
          <label>
            Main Category
            <select
              className="browser-default custom-select"
              name="MainCategory_MainCategory_ID"
              value={this.state.MainCategory_MainCategory_ID}
              onChange={this.handleChange}
              required
            >
              <option>Select</option>
              {this.state.maincategories.map(maincategory => {
                return (
                  <option value={maincategory.MainCategory_ID} required>
                    {maincategory.MainCategoryName}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            Upload Image <br />
            <input
              type="file"
              name="CategoryImage"
              onChange={this.onChangeHandler}
              required
            />
          </label>
          <br />
          <button type="submit">Create</button>
        </div>
      </form>
    );
  }
}

export default AddForm;
