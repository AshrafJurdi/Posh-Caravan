import React from "react";
import "./Headers.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
class HeaderNew extends React.Component {
  render() {
    return (
      <div className="Header">
        <Navbar expand="lg" className="NavBar">
          <Link className="repage" to="/pages/Vintage Page/vintagepage">
            VINTAGE & PRE\LOVED
          </Link>
          <Link
            className="newin"
            to={{
              pathname: "/pages/Product Page/productpage",
              state: { route: "everythingnew/newin" }
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
                  state: { route: "everythingnew/fashion" }
                }}
              >
                ALL
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/fashion/jackets" }
                }}
              >
                JACKETS
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/fashion/dresses" }
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
                  state: { route: "/everythingnew/fashion/skirts" }
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
                  state: { route: "everythingnew/fashion/pants" }
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
                  state: { route: "everythingnew/fashion/tops" }
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
                  state: { route: "everythingnew/bagsandaccessories" }
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
                  state: { route: "everythingnew/bagsandaccessories/bags" }
                }}
              >
                BAGS
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/bagsandaccessories/shoes" }
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
                    route: "everythingnew/bagsandaccessories/smallleathergoods"
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
                    route: "everythingnew/bagsandaccessories/otheraccessories"
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
                  state: { route: "everythingnew/jewelry" }
                }}
              >
                ALL
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/jewelry/necklaces" }
                }}
              >
                NECKLACES
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/jewelry/bracelets" }
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
                  state: { route: "everythingnew/jewelry/rings" }
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
                  state: { route: "everythingnew/jewelry/otherjewelry" }
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
              state: { route: "everythingnew/sale" }
            }}
          >
            SALE
          </Link>
        </Navbar>
      </div>
    );
  }
}

export default HeaderNew;
