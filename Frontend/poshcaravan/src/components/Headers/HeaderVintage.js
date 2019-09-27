import React from "react";
import "./Headers.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
              state: { route: "vintage&preloved/newin", header: "vintage" }
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
                  state: {
                    route: "vintage&preloved/clothes",
                    header: "vintage"
                  }
                }}
              >
                ALL
              </Link>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: {
                      route: "vintage&preloved/clothes/jackets",
                      header: "vintage"
                    }
                  }}
                >
                  JACKETS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: {
                      route: "vintage&preloved/clothes/dresses",
                      header: "vintage"
                    }
                  }}
                >
                  DRESSES
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: {
                      route: "vintage&preloved/clothes/skirts",
                      header: "vintage"
                    }
                  }}
                >
                  SKIRTS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: {
                      route: "vintage&preloved/clothes/pants",
                      header: "vintage"
                    }
                  }}
                >
                  PANTS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: {
                      route: "vintage&preloved/clothes/tops",
                      header: "vintage"
                    }
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
              state: {
                route: "vintage&preloved/bagsandaccessories",
                header: "vintage"
              }
            }}
          >
            BAGS & ACCESSORIES
          </Link>

          <Link
            className="jewelry"
            to={{
              pathname: "/pages/Product Page/productpage",
              state: {
                route: "vintage&preloved/products/jewelry",
                header: "vintage"
              }
            }}
          >
            JEWELRY
          </Link>
          <Link
            className="furniture"
            to={{
              pathname: "/pages/Product Page/productpage",
              state: {
                route: "vintage&preloved/products/furniture",
                header: "vintage"
              }
            }}
          >
            FURNITURE
          </Link>
          <Link
            className="homeaccents"
            to={{
              pathname: "/pages/Product Page/productpage",
              state: {
                route: "vintage&preloved/products/homeaccents",
                header: "vintage"
              }
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
