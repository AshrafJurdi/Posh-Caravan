import React from "react";
import "./Headers.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Link
                className="fashion"
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/fashion" }
                }}
              >
                FASHION
              </Link>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "everythingnew/fashion/jackets" }
                  }}
                >
                  JACKETS
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "everythingnew/fashion/dresses" }
                  }}
                >
                  DRESSES
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "/everythingnew/fashion/skirts" }
                  }}
                >
                  SKIRTS
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "everythingnew/fashion/pants" }
                  }}
                >
                  PANTS
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "everythingnew/fashion/tops" }
                  }}
                >
                  TOPS
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Link
                className="bagsaccessories"
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/bagsandaccessories" }
                }}
              >
                BAGS & ACCESSORIES
              </Link>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "everythingnew/bagsandaccessories/bags" }
                  }}
                >
                  BAGS
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "everythingnew/bagsandaccessories/shoes" }
                  }}
                >
                  SHOES
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: {
                      route:
                        "everythingnew/bagsandaccessories/smallleathergoods"
                    }
                  }}
                >
                  SMALL LEATHER GOODS
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
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
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Link
                className="jewelry"
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/jewelry" }
                }}
              >
                JEWELRY
              </Link>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "everythingnew/jewelry/necklaces" }
                  }}
                >
                  NECKLACES
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "everythingnew/jewelry/bracelets" }
                  }}
                >
                  BRACELETS
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "everythingnew/jewelry/rings" }
                  }}
                >
                  RINGS
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: { route: "everythingnew/jewelry/otherjewelry" }
                  }}
                >
                  OTHER
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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
