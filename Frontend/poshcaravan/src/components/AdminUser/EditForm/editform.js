import React from "react";
import { MDBInput } from "mdbreact";
import "../../CreateForm/createform.css";

class EditFormUser extends React.Component {
  constructor(props) {
    super(props);
    console.log("new user", this.props.user);
    this.state = {
      FirstName: this.props.user.FirstName,
      LastName: this.props.user.LastName,
      Email: this.props.user.Email,
      UserName: this.props.user.UserName,
      Role: this.props.user.Role,
      PhoneNumber: this.props.user.PhoneNumber,
      Password: this.props.user.Password,
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
  editUser = async parameters => {
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
      const response = await fetch(
        `${process.env.REACT_APP_APP_URL}/user/update/${this.props.user.User_ID}`,
        {
          method: "PUT",
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
    if (!this.state.Role) {
      alert("Choose Role!");
    }
    this.editUser({
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
            value={this.state.FirstName}
            required
            onChange={this.handleChange}
          />
          <MDBInput
            label="Last Name"
            outline
            size="lg"
            type="text"
            name="LastName"
            value={this.state.LastName}
            required
            onChange={this.handleChange}
          />
          <MDBInput
            label="Email"
            outline
            size="lg"
            type="text"
            name="Email"
            value={this.state.Email}
            required
            onChange={this.handleChange}
          />
          <MDBInput
            label="User Name"
            outline
            size="lg"
            type="text"
            name="UserName"
            value={this.state.UserName}
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
            value={this.state.PhoneNumber}
            required
            onChange={this.handleChange}
          />
          <MDBInput
            label="Password"
            outline
            size="lg"
            type="password"
            name="Password"
            value={this.state.Password}
            required
            onChange={this.handleChange}
          />

          <br />
          <button type="submit">Update</button>
        </div>
      </form>
    );
  }
}

export default EditFormUser;
