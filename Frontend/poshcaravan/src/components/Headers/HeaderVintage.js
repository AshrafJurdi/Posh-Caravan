import React from "react";
import "./Headers.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

class HeaderVintage extends React.Component {
  render() {
    return (
      <div className="Headers">
        <Navbar expand="lg" className="NavBar">
          <Link href="#newin" className="repage">
            EVERYTHING NEW
          </Link>
          <Nav.Link classname="newinb" href="#newin">
            NEW IN
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Link
                className="Vintage-PreLoved"
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/fashion/dresses" }
                }}
              >
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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Link className="EverythingNew" to="/products/EverythingNew">
                BAGS & ACCESSORIES
              </Link>
            </Dropdown.Toggle>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Link className="EverythingNew" to="/products/EverythingNew">
                JEWELRY
              </Link>
            </Dropdown.Toggle>
          </Dropdown>
          <Link href="#furniture" className="furniture">
            FURNITURE
          </Link>
          <Link href="#homeaccents" className="homeaccents">
            HOME ACCENTS
          </Link>
          <Nav.Link>
            <HashLink className="aboutUs" smooth to="/#aboutUs">
              ABOUT US
            </HashLink>
          </Nav.Link>
          <Nav.Link>
            <HashLink className="contactUs" smooth to="/#contactUs">
              CONTACT US
            </HashLink>
          </Nav.Link>
        </Navbar>
      </div>
    );
  }
}

export default HeaderVintage;
