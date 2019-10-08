import React, { Component } from "react";
import "./AdminLogin.css";
import Cookies from "universal-cookie";
import HeaderLogo from "../../components/Header-Logo/HeaderLogo";
import Adminpanelpage from "../../pages/Admin Panel Page/adminpanelpage.js";

const cookies = new Cookies();

class AdminLogin extends Component {
  state = {
    token: null,
    error: false
  };

  componentDidMount() {
    console.log(cookies.get("token"));
  }
  onSubmit = async e => {
    e.preventDefault();
    e.persist();
    console.log(e.target);
    const email = e.target.name.value;
    const password = e.target.password.value;
    e.target.className += " was-validated";
    console.log(email, password);
    if (email && password) {
      console.log("here");
      const response = await fetch(
        `http://localhost:5000/login?email=${email}&password=${password}`
      );
      const result = await response.json();
      console.log(result);
      if (result.success) {
        cookies.set("token", result.result.token, { path: "/" });
        this.setState({ token: result.result.token, error: false });
      } else {
        //e.target.children[1].style.display = "block";
        this.setState({ error: true });
      }
    }
  };

  onLogout = async e => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:5000/logout?token=${this.state.token}`
    );
    cookies.remove("token");
    this.setState({ token: null });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return cookies.get("token") === undefined ? (
      <>
        <HeaderLogo />
        {this.state.error ? (
          <div
            className="invalid-feedback incorrect"
            style={{ display: "block" }}
            name="error"
          >
            Incorrect username or password!
          </div>
        ) : (
          <></>
        )}
        <form
          className="needs-validation"
          noValidate
          class="text-center border border-light p-5 login"
          onSubmit={e => this.onSubmit(e)}
        >
          <p class="h4 mb-4">Sign in</p>

          {/* <!-- Username --> */}
          <div className="inputs">
            <input
              value={this.state.name}
              onChange={this.changeHandler}
              type="name"
              name="name"
              id="defaultLoginFormName"
              class="form-control mb-5"
              placeholder="User Name"
              required
            ></input>
            <div className="invalid-feedback">
              Please provide a valid Username.
            </div>
          </div>

          <div className="inputs">
            {/* Password  */}
            <input
              value={this.state.password}
              onChange={this.changeHandler}
              type="password"
              name="password"
              id="defaultLoginFormPassword"
              class="form-control mb-5"
              placeholder="Password"
              required
            ></input>
            <div className="invalid-feedback">
              Please provide a valid Password.
            </div>
          </div>
          {/* <!-- Sign in button --> */}
          <button class="btn btn-info btn-block my-4 loginbtn" type="submit">
            Sign in
          </button>
        </form>
      </>
    ) : (
      <>
        <HeaderLogo />
        <button
          class="btn btn-info btn-block my-4 loginoutbtn"
          onClick={e => this.onLogout(e)}
          type="submit"
        >
          Log out
        </button>
        <Adminpanelpage />
      </>
    );
  }
}

export default AdminLogin;
