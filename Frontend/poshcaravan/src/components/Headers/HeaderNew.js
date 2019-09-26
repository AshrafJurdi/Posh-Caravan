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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Link
                className="fashion"
                to={{
                  pathname: "/pages/Product Page/productpage",
                  state: { route: "everythingnew/fashion", header: "new" }
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
                    state: {
                      route: "everythingnew/fashion/jackets",
                      header: "new"
                    }
                  }}
                >
                  JACKETS
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
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
              </Dropdown.Item>
              <Dropdown.Item>
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
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: {
                      route: "everythingnew/fashion/pants",
                      header: "new"
                    }
                  }}
                >
                  PANTS
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: {
                      route: "everythingnew/fashion/tops",
                      header: "new"
                    }
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
                  state: {
                    route: "everythingnew/bagsandaccessories",
                    header: "new"
                  }
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
                    state: {
                      route: "everythingnew/bagsandaccessories/bags",
                      header: "new"
                    }
                  }}
                >
                  BAGS
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
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
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: {
                      route:
                        "everythingnew/bagsandaccessories/smallleathergoods",
                      header: "new"
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
                      route:
                        "everythingnew/bagsandaccessories/otheraccessories",
                      header: "new"
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
                  state: { route: "everythingnew/jewelry", header: "new" }
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
                    state: {
                      route: "everythingnew/jewelry/necklaces",
                      header: "new"
                    }
                  }}
                >
                  NECKLACES
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
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
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={{
                    pathname: "/pages/Product Page/productpage",
                    state: {
                      route: "everythingnew/jewelry/rings",
                      header: "new"
                    }
                  }}
                >
                  RINGS
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
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
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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

export default HeaderNew;
