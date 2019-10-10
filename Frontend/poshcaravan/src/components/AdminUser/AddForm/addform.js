import React from "react";
import { MDBInput, MDBFormInline } from "mdbreact";
import "../../CreateForm/createform.css";

class AddFormUser extends React.Component {
  constructor() {
    super();

    this.state = {
      FirstName: null,
      LastName: null,
      Email: null,
      UserName: null,
      Role: null,
      PhoneNumber: null,
      Password: null,
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
    console.log("state", this.state);
  };

  /**
   *
   *
   *
   */
  createUser = async parameters => {
    let {
      FirstName,
      LastName,
      Email,
      UserName,
      Role,
      PhoneNumber,
      Password
    } = parameters;

    console.log("parameters", parameters);

    try {
      // const body = new FormData();
      // body.append("FirstName", FirstName);
      // body.append("LastName", LastName);
      // body.append("Email", Email);
      // body.append("UserName", UserName);
      // body.append("Role", Role);
      // body.append("PhoneNumber", PhoneNumber);
      // body.append("Password", Password);
      // console.log("parameters", parameters);
      const response = await fetch(`${process.env.REACT_APP_APP_URL}/user/create`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          FirstName,
          LastName,
          Email,
          UserName,
          Role,
          PhoneNumber,
          Password
        })
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
    if (!this.state.Role) {
      alert("Choose Role!");
    }
    this.createUser({
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      UserName: this.state.UserName,
      Role: this.state.Role,
      PhoneNumber: this.state.PhoneNumber,
      Password: this.state.Password
    });
    console.log(this.state);
  };
  render() {
    let cat_default = false;
    return (
      <form className="form-group1" onSubmit={e => this.onSubmit(e)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <MDBInput
            label="First Name"
            outline
            size="lg"
            type="text"
            name="FirstName"
            required
            onChange={this.handleChange}
          />
          <MDBInput
            label="Last Name"
            outline
            size="lg"
            type="text"
            name="LastName"
            required
            onChange={this.handleChange}
          />
          <MDBInput
            label="Email"
            outline
            size="lg"
            type="text"
            name="Email"
            required
            onChange={this.handleChange}
          />
          <MDBInput
            label="User Name"
            outline
            size="lg"
            type="text"
            name="UserName"
            required
            onChange={this.handleChange}
          />
          <label>
            Role
            <select
              className="browser-default custom-select"
              name="Role"
              value={this.state.Role}
              onChange={this.handleChange}
              required
            >
              <option required>Select</option>
              <option value="Admin" required>
                Admin
              </option>
              <option value="Guest" required>
                Guest
              </option>
            </select>
          </label>
          <MDBInput
            label="Phone Number"
            outline
            size="lg"
            type="text"
            name="PhoneNumber"
            required
            onChange={this.handleChange}
          />
          <MDBInput
            label="Password"
            outline
            size="lg"
            type="text"
            name="Password"
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

export default AddFormUser;
