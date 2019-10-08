import React from "react";
import { MDBInput, MDBFormInline } from "mdbreact";

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SubCategoryName: this.props.SubCategoryName,
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
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("state", this.state);
    console.log("props", this.props);
  };

  /**
   * creates a component with the given ProductName and ProductDescription and ProductPrice
   *
   *
   */
  editSubCategory = async parameters => {
    let { SubCategory_ID, SubCategoryName } = parameters;

    console.log("parameters", parameters);

    try {
      const body = new FormData();

      body.append("SubCategoryName", SubCategoryName);
      const response = await fetch(
        `http://localhost:5000/subcategory/update/${SubCategory_ID}`,
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
    this.editSubCategory({
      SubCtaegoryName: this.state.SubCategoryName,
      SubCategory_ID: this.props.SubCategory_ID
    });
  };
  render() {
    let cat_default = false;
    return (
      <form className="form-group-edit" onSubmit={e => this.onSubmit(e)}>
        <MDBInput
          label="SubCategory Name"
          outline
          size="lg"
          type="text"
          name="SubCategoryName"
          required
          value={this.state.SubCategoryName}
          onChange={this.handleChange}
        />

        <br />
        <div>
          <input type="submit" value="Update" />
        </div>
      </form>
    );
  }
}

export default EditForm;
