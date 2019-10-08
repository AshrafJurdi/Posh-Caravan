import React from "react";
import "./Headers.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  MDBNavbar,
  MDBNavbarBrand,
  NavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from "mdbreact";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

class HeaderVintage extends React.Component {
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
          <Link className="repage" to="/EverythingNewPage">
            EVERYTHING NEW
          </Link>
          <Link
            className="newin-vintage"
            to={{
              pathname: "/Product Page",
              state: { route: "vintage&preloved/newin", header: "vintage" }
            }}
          >
            NEW IN
          </Link>

          <Dropdown>
            <NavDropdown title="CLOTHING" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  className="clothing"
                  to={{
                    pathname: "/Product Page",
                    state: {
                      route: "vintage&preloved/clothes",
                      header: "vintage"
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
                    pathname: "/Product Page",
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
                    pathname: "/Product Page",
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
                    pathname: "/Product Page",
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
                    pathname: "/Product Page",
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

          <NavDropdown title="BAGS & ACCESSORIES" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link
                className="bagsaccessories"
                to={{
                  pathname: "/Product Page",
                  state: {
                    route: "vintage&preloved/bagsandaccessories",
                    header: "vintage"
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
                    route: "vintage&preloved/bagsandaccessories/bags",
                    header: "vintage"
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
                    route: "vintage&preloved/bagsandaccessories/shoes",
                    header: "vintage"
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
                      "vintage&preloved/bagsandaccessories/smallleathergoods",
                    header: "vintage"
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
                      "vintage&preloved/bagsandaccessories/otheraccessories",
                    header: "vintage"
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
                    route: "vintage&preloved/products/jewelry",
                    header: "vintage"
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
                    route: "vintage&preloved/jewelry/necklaces",
                    header: "vintage"
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
                    route: "vintage&preloved/jewelry/bracelets",
                    header: "vintage"
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
                    route: "vintage&preloved/jewelry/rings",
                    header: "vintage"
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
                    route: "vintage&preloved/jewelry/otherjewelry",
                    header: "vintage"
                  }
                }}
              >
                OTHER
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link
            className="furniture"
            to={{
              pathname: "/Product Page",
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
              pathname: "/Product Page",
              state: {
                route: "vintage&preloved/products/homeaccents",
                header: "vintage"
              }
            }}
          >
            HOME ACCENTS
          </Link>

          <Link
            className="about-us"
            to={{
              pathname: "/About Us",
              state: { header: "vintage" }
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
                  <Link className="repage" to="/EverythingNewPage">
                    EVERYTHING NEW
                  </Link>
                  <Link
                    className="newinb"
                    to={{
                      pathname: "/Product Page",
                      state: {
                        route: "vintage&preloved/newin",
                        header: "vintage"
                      }
                    }}
                  >
                    NEW IN
                  </Link>

                  <Dropdown>
                    <NavDropdown title="CLOTHING" id="basic-nav-dropdown">
                      <Link
                        className="clothing"
                        to={{
                          pathname: "/Product Page",
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
                            pathname: "/Product Page",
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
                            pathname: "/Product Page",
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
                            pathname: "/Product Page",
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
                            pathname: "/Product Page",
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
                            pathname: "/Product Page",
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
                            route: "vintage&preloved/bagsandaccessories",
                            header: "vintage"
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
                            route: "vintage&preloved/bagsandaccessories/bags",
                            header: "vintage"
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
                            route: "vintage&preloved/bagsandaccessories/shoes",
                            header: "vintage"
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
                              "vintage&preloved/bagsandaccessories/smallleathergoods",
                            header: "vintage"
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
                              "vintage&preloved/bagsandaccessories/otheraccessories",
                            header: "vintage"
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
                            route: "vintage&preloved/products/jewelry",
                            header: "vintage"
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
                            route: "vintage&preloved/jewelry/necklaces",
                            header: "vintage"
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
                            route: "vintage&preloved/jewelry/bracelets",
                            header: "vintage"
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
                            route: "vintage&preloved/jewelry/rings",
                            header: "vintage"
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
                            route: "vintage&preloved/jewelry/otherjewelry",
                            header: "vintage"
                          }
                        }}
                      >
                        OTHER
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link
                    className="furniture"
                    to={{
                      pathname: "/Product Page",
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
                      pathname: "/Product Page",
                      state: {
                        route: "vintage&preloved/products/homeaccents",
                        header: "vintage"
                      }
                    }}
                  >
                    HOME ACCENTS
                  </Link>

                  <Link
                    className="about-us"
                    to={{
                      pathname: "/About Us",
                      state: { header: "vintage" }
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

export default HeaderVintage;
