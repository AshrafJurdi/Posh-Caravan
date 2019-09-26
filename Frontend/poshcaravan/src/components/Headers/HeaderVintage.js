import React from "react";
import "./Headers.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashLink } from "react-router-hash-link";
import DropdownButton from "react-bootstrap/DropdownButton";

class HeaderVintage extends React.Component {
  render() {
    return (
      <div className="Header">
        <Navbar expand="lg" className="NavBar">
          <Link
            className="repage"
            to="/pages/Everything New Page/everythingnew"
          >
            EVERYTHING NEW
          </Link>
          <Link
            className="newinb"
            to={{
              pathname: "/pages/Product Page/productpage",
              state: { route: "vintage&preloved/newin" }
            }}
          >
            NEW IN
          </Link>

          <Dropdown>
            <NavDropdown title="CLOTHING" id="basic-nav-dropdown">
              <Link
                className="clothing"
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "vintage&preloved/clothes" }
                }}
              >
                CLOTHING
              </Link>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "vintage&preloved/clothes/jackets" }
                  }}
                >
                  JACKETS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "vintage&preloved/clothes/dresses" }
                  }}
                >
                  DRESSES
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "vintage&preloved/clothes/skirts" }
                  }}
                >
                  SKIRTS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "vintage&preloved/clothes/pants" }
                  }}
                >
                  PANTS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "vintage&preloved/clothes/tops" }
                  }}
                >
                  TOPS
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Dropdown>

          <Link
            className="bagsaccessories"
            to={{
              pathname: "/pages/Product Page/productpage",
              state: { route: "vintage&preloved/bagsandaccessories" }
            }}
          >
            BAGS & ACCESSORIES
          </Link>

          <Link
            className="jewelry"
            to={{
              pathname: "/pages/Product Page/productpage",
              state: { route: "vintage&preloved/products/jewelry" }
            }}
          >
            JEWELRY
          </Link>
          <Link
            className="furniture"
            to={{
              pathname: "/pages/Product Page/productpage",
              state: { route: "vintage&preloved/products/furniture" }
            }}
          >
            FURNITURE
          </Link>
          <Link
            className="homeaccents"
            to={{
              pathname: "/pages/Product Page/productpage",
              state: { route: "vintage&preloved/products/homeaccents" }
            }}
          >
            HOME ACCENTS
          </Link>
        </Navbar>
      </div>
    );
  }
}

export default HeaderVintage;
