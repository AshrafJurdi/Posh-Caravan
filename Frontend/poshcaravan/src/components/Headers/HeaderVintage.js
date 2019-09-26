import React from "react";
import "./Headers.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";


class HeaderVintage extends React.Component {

  render() {
    return (
      /* <div className="dropdown">
    <button className="dropbtn">CLOTHING
      <i class="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">JACKETS</a>
      <a href="#">DRESSES</a>
      <a href="#">SKIRTS</a>
      <a href="#">PANTS</a>
      <a href="#">TOPS</a>
  </div> */

      <div className="Header">
        <Link className="repage" to="/pages/Everything New Page/everythingnew">
          EVERYTHING NEW
        </Link>
        <Link className="newinb" to="/pages/Product Page/productpage">
          NEW IN
        </Link>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <Link className="clothing" to="/pages/Product Page/productpage">
              CLOTHING
            </Link>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">JACKETS</Dropdown.Item>
            <Dropdown.Item href="#/action-2">DRESSES</Dropdown.Item>
            <Dropdown.Item href="#/action-3">SKIRTS</Dropdown.Item>
            <Dropdown.Item href="#/action-4">PANTS</Dropdown.Item>
            <Dropdown.Item href="#/action-5">TOPS</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <DropdownButton id="dropdown-item-button" title="CLOTHING">
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
        <Link className="bags&accessories" to="/pages/Product Page/productpage">
          BAGS & ACCESSORIES
        </Link>
        <Link className="jewelry" to="/pages/Product Page/productpage">
          JEWELRY
        </Link>
        <Link className="furniture" to="/pages/Product Page/productpage">
          FURNITURE
        </Link>
        <Link className="homeaccents" to="/pages/Product Page/productpage">
          HOME ACCENTS
        </Link>
      </div>
    );
  }
}

export default HeaderVintage;
