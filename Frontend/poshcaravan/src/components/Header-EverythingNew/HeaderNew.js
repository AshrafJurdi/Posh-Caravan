import React from "react";
import "../Header-Vintage&Preloved/Headers.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  NavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from "mdbreact";

class HeaderNew extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  render() {
    return (
      <div className="Header">
        <Navbar expand="lg" className="NavBar">
          <Link className="repage" to="/Vintage&PrelovedPage">
            VINTAGE & PRELOVED
          </Link>
          <Link
            className="newin-new"
            to={{
              pathname: "/Product Page",
              state: { route: "everythingnew/newin", header: "new" }
            }}
          >
            NEW IN
          </Link>

          <NavDropdown title="FASHION" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link
                className="fashion"
                to={{
                  pathname: "/Product Page",
                  state: { route: "everythingnew/fashion", header: "new" }
                }}
              >
                ALL
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/Product Page",
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
                  pathname: "/Product Page",
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
              <Link
                to={{
                  pathname: "/Product Page",
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
              <Link
                to={{
                  pathname: "/Product Page",
                  state: { route: "everythingnew/fashion/pants", header: "new" }
                }}
              >
                PANTS
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/Product Page",
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
                  pathname: "/Product Page",
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
              <Link
                to={{
                  pathname: "/Product Page",
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
                  pathname: "/Product Page",
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
              <Link
                to={{
                  pathname: "/Product Page",
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
                  pathname: "/Product Page",
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
              <Link
                className="jewelry"
                to={{
                  pathname: "/Product Page",
                  state: { route: "everythingnew/jewelry", header: "new" }
                }}
              >
                ALL
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/Product Page",
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
                  pathname: "/Product Page",
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
              <Link
                to={{
                  pathname: "/Product Page",
                  state: { route: "everythingnew/jewelry/rings", header: "new" }
                }}
              >
                RINGS
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to={{
                  pathname: "/Product Page",
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
              pathname: "/Product Page",
              state: { route: "everythingnew/sale", header: "new" }
            }}
          >
            SALE
          </Link>

          <Link
            className="about-us"
            to={{
              pathname: "/About Us",
              state: { header: "new" }
            }}
          >
            ABOUT US
          </Link>
        </Navbar>

        <MDBContainer className="hamburger-menu-new">
          <MDBNavbar
            color="light-blue lighten-4"
            style={{ marginTop: "20px" }}
            light
          >
            <MDBContainer>
              <MDBNavbarBrand></MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse("navbarCollapse1")}
              />
              <MDBCollapse
                id="navbarCollapse1"
                isOpen={this.state.collapseID}
                navbar
              >
                <NavbarNav left>
                  <Link className="repage" to="/Vintage Page/vintagepage">
                    VINTAGE & PRELOVED
                  </Link>
                  <Link
                    className="newin"
                    to={{
                      pathname: "/Product Page",
                      state: { route: "everythingnew/newin", header: "new" }
                    }}
                  >
                    NEW IN
                  </Link>

                  <NavDropdown title="FASHION" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                      <Link
                        className="fashion"
                        to={{
                          pathname: "/Product Page",
                          state: {
                            route: "everythingnew/fashion",
                            header: "new"
                          }
                        }}
                      >
                        ALL
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to={{
                          pathname: "/Product Page",
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
                          pathname: "/Product Page",
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
                      <Link
                        to={{
                          pathname: "/Product Page",
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
                      <Link
                        to={{
                          pathname: "/Product Page",
                          state: {
                            route: "everythingnew/fashion/pants",
                            header: "new"
                          }
                        }}
                      >
                        PANTS
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to={{
                          pathname: "/Product Page",
                          state: {
                            route: "everythingnew/fashion/tops",
                            header: "new"
                          }
                        }}
                      >
                        TOPS
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="BAGS & ACCESSORIES"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link
                        className="bagsaccessories"
                        to={{
                          pathname: "/Product Page",
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
                      <Link
                        to={{
                          pathname: "/Product Page",
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
                          pathname: "/Product Page",
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
                      <Link
                        to={{
                          pathname: "/Product Page",
                          state: {
                            route:
                              "everythingnew/bagsandaccessories/smallleathergoods",
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
                          pathname: "/Product Page",
                          state: {
                            route:
                              "everythingnew/bagsandaccessories/otheraccessories",
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
                      <Link
                        className="jewelry"
                        to={{
                          pathname: "/Product Page",
                          state: {
                            route: "everythingnew/jewelry",
                            header: "new"
                          }
                        }}
                      >
                        ALL
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to={{
                          pathname: "/Product Page",
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
                          pathname: "/Product Page",
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
                      <Link
                        to={{
                          pathname: "/Product Page",
                          state: {
                            route: "everythingnew/jewelry/rings",
                            header: "new"
                          }
                        }}
                      >
                        RINGS
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to={{
                          pathname: "/Product Page",
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
                      pathname: "/Product Page",
                      state: { route: "everythingnew/sale", header: "new" }
                    }}
                  >
                    SALE
                  </Link>

                  <Link
                    className="about-us"
                    to={{
                      pathname: "/About Us",
                      state: { header: "new" }
                    }}
                  >
                    ABOUT US
                  </Link>
                </NavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
      </div>
    );
  }
}

export default HeaderNew;
