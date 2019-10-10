import React from "react";
import { MDBInput } from "mdbreact";
import "../../CreateForm/createform.css";

class SubCategoryEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SubCategoryName: this.props.subcategory.SubCategoryName,
      SubCategory_ID: this.props.subcategory.SubCategory_ID
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });

    console.log("state", this.state);
  };

  /**
   *
   *
   *
   */
  updateSubCategory = async parameters => {
    let { SubCategoryName, SubCategory_ID } = parameters;

    console.log("parameters", parameters);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_APP_URL}/subcategory/update/${SubCategory_ID}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            SubCategoryName
          })
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
    this.updateSubCategory({
      SubCategoryName: this.state.SubCategoryName,
      SubCategory_ID: this.state.SubCategory_ID
    });
    console.log(this.state);
  };
  render() {
    let cat_default = false;
    return (
      <form className="form-group1" onSubmit={e => this.onSubmit(e)}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <MDBInput
              label="SubCategory Name"
              outline
              size="lg"
              type="text"
              name="SubCategoryName"
              value={this.state.SubCategoryName}
              required
              onChange={this.handleChange}
            />

            <br />
            <button type="submit">Update</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SubCategoryEditForm;
