import React from "react";
import { MDBInput, MDBFormInline } from "mdbreact";
import "../../CreateForm/createform.css";

class AddFormSubCat extends React.Component {
  constructor() {
    super();

    this.state = {
      SubCategoryName: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /**
   *
   *
   *
   */
  createSubCategory = async parameters => {
    let { SubCategoryName } = parameters;

    console.log("parameters", parameters);

    try {
      const body = new FormData();
      body.append("SubCategoryName", SubCategoryName);

      const response = await fetch(`http://localhost:5000/subcategory/create`, {
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
    this.createSubCategory({
      SubCategoryName: this.state.SubCategoryName
    });
    console.log(this.state);
  };
  render() {
    let cat_default = false;
    return (
      <form className="form-group1" onSubmit={e => this.onSubmit(e)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <MDBInput
            label="SubCategory Name"
            outline
            size="lg"
            type="text"
            name="SubCategoryName"
            required
            onChange={this.handleChange}
          />

          <br />
          <button type="submit">Create</button>
        </div>
      </form>
    );
  }
}

export default AddFormSubCat;
