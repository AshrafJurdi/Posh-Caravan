import React from "react";
import "./Headers.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

class HeaderNew extends React.Component {
  render() {
    return (
      <div className="Header">
      <Link className="vintage" to="/pages/Vintage Page/vintagepage">
      VINTAGE & PRE\LOVED
      </Link>
      <Link className="newin" to="/pages/Product Page/productpage">
        NEW IN
      </Link>
         
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Link
                className="Vintage-PreLoved"
                to="/pages/Product Page/productpage"
              >
                FASHION
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
              <Link className="EverythingNew" to="/pages/Product Page/productpage">
                BAGS & ACCESSORIES
              </Link>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">BAGS</Dropdown.Item>
              <Dropdown.Item href="#/action-2">SHOES</Dropdown.Item>
              <Dropdown.Item href="#/action-3">SMALL LEATHER GOODS
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">OTHER ACCESSORIES</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Link className="jewelry" to="/pages/Product Page/productpage">
                JEWELRY
              </Link>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">NECKLACES</Dropdown.Item>
              <Dropdown.Item href="#/action-2">BRACELETS</Dropdown.Item>
              <Dropdown.Item href="#/action-3">RINGS</Dropdown.Item>
              <Dropdown.Item href="#/action-4">OTHER</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link href="#newin" className="sale">
            SALE
          </Link>
  
      </div>
    );
  }
}

export default HeaderNew;