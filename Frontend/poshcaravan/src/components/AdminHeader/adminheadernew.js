import React from "react";
import "../Headers/Headers.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
class AdminHeaderNew extends React.Component {
  render() {
    return (
      <div className="Header">
        <Navbar expand="lg" className="NavBar">
          <Link className="repage" to="/pages/Vintage Page/vintagepage">
            VINTAGE & PRELOVED
          </Link>
          <Link
            className="newin"
            to={{
              pathname: "/pages/Product Page/productpage",
              state: { route: "everythingnew/newin", header: "new" }
            }}
          >
            NEW IN
          </Link>

          <NavDropdown title="FASHION" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              {" "}
              <Link
                className="fashion"
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/fashion", header: "new" }
                }}
              >
                ALL
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: {
                    route: "everythingnew/fashion/jackets",
                    header: "new"
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
                    route: "everythingnew/fashion/dresses",
                    header: "new"
                  }
                }}
              >
                DRESSES
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: {
                    route: "/everythingnew/fashion/skirts",
                    header: "new"
                  }
                }}
              >
                SKIRTS
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/fashion/pants", header: "new" }
                }}
              >
                PANTS
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/fashion/tops", header: "new" }
                }}
              >
                TOPS
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="BAGS & ACCESSORIES" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link
                className="bagsaccessories"
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: {
                    route: "everythingnew/bagsandaccessories",
                    header: "new"
                  }
                }}
              >
                ALL
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: {
                    route: "everythingnew/bagsandaccessories/bags",
                    header: "new"
                  }
                }}
              >
                BAGS
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: {
                    route: "everythingnew/bagsandaccessories/shoes",
                    header: "new"
                  }
                }}
              >
                SHOES
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: {
                    route: "everythingnew/bagsandaccessories/smallleathergoods",
                    header: "new"
                  }
                }}
              >
                SMALL LEATHER GOODS
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: {
                    route: "everythingnew/bagsandaccessories/otheraccessories",
                    header: "new"
                  }
                }}
              >
                OTHER ACCESSORIES
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="JEWELRY" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              {" "}
              <Link
                className="jewelry"
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/jewelry", header: "new" }
                }}
              >
                ALL
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: {
                    route: "everythingnew/jewelry/necklaces",
                    header: "new"
                  }
                }}
              >
                NECKLACES
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: {
                    route: "everythingnew/jewelry/bracelets",
                    header: "new"
                  }
                }}
              >
                BRACELETS
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/jewelry/rings", header: "new" }
                }}
              >
                RINGS
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: {
                    route: "everythingnew/jewelry/otherjewelry",
                    header: "new"
                  }
                }}
              >
                OTHER
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          <Link
            className="sale"
            to={{
              pathname: "/pages/Product Page/productpage",
              state: { route: "everythingnew/sale", header: "new" }
            }}
          >
            SALE
          </Link>
        </Navbar>
      </div>
    );
  }
}

export default AdminHeaderNew;
