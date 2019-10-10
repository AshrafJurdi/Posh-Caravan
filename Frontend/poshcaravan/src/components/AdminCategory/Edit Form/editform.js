import React from "react";
import { MDBInput, MDBFormInline } from "mdbreact";
import "../../CreateForm/createform.css";

class CategoryEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CategoryName: this.props.category.CategoryName,
      CategoryImage: this.props.category.CategoryImage,
      MainCategory_MainCategory_ID: this.props.category
        .MainCategory_MainCategory_ID,
      Category_ID: this.props.category.Category_ID,
      maincategories: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    try {
      const responseMainCategories = await fetch(
        "http://localhost:5000/maincategories"
      );

      const maincategories = await responseMainCategories.json();
      this.setState({ maincategories });

      console.log("Main Categories==>", maincategories);
    } catch (err) {
      console.log(err);
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });

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
  updateCategory = async parameters => {
    let {
      CategoryName,
      CategoryImage,
      MainCategory_MainCategory_ID,
      Category_ID
    } = parameters;

    console.log("parameters", parameters);

    try {
      const body = new FormData();

      console.log("CategoryImage ", CategoryImage);
      body.append("CategoryName", CategoryName);
      body.append("CategoryImage", CategoryImage);
      body.append("MainCategory_MainCategory_ID", MainCategory_MainCategory_ID);

      const response = await fetch(
        `http://localhost:5000/category/update/${Category_ID}`,
        {
          method: "PUT",
          body
        }
      );
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
    this.updateCategory({
      CategoryName: this.state.CategoryName,
      CategoryImage: this.state.CategoryImage,
      MainCategory_MainCategory_ID: this.state.MainCategory_MainCategory_ID,
      Category_ID: this.state.Category_ID
    });
    console.log(this.state);
  };
  render() {
    let cat_default = false;
    return (
      <form className="form-group1" onSubmit={e => this.onSubmit(e)}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={`http://localhost:5000/Images/${this.state.CategoryImage}`}
            style={{ width: "50%", height: "40rem" }}
          />
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <MDBInput
              label="Category Name"
              outline
              size="lg"
              type="text"
              name="CategoryName"
              value={this.state.CategoryName}
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
              />
            </label>
            <br />
            <button type="submit">Update</button>
          </div>
        </div>
      </form>
    );
  }
}

export default CategoryEditForm;
