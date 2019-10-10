import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer11">
          <div className="footer-first-section">
            <Link to="/Vintage&PrelovedPage" className="footer-main-categories">
              Vintage & Preloved
            </Link>
            <div className="footer-main-categories-border"></div>
            <Link to="/EverythingNewPage" className="footer-main-categories">
              Everything New
            </Link>
          </div>
          <div className="footer-middle-section">
            <div className="ul-section11">
              <div className="ul-section-vintage">
                <ul className="left-ul">
                  <p className="footer-titles">CLOTHING</p>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                </ul>

                <ul className="left-ul">
                  <p className="footer-titles">BAGS & ACCESSORIES</p>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                </ul>

                <ul className="left-ul">
                  <p className="footer-titles">JEWELRY</p>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                </ul>

                <ul className="left-ul">
                  <p className="footer-titles">Others</p>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <lli>
                    {" "}
                    <Link
                      className="about-us"
                      to={{
                        pathname: "/About Us",
                        state: { header: "vintage" }
                      }}
                    >
                      ABOUT US
                    </Link>
                  </lli>
                </ul>
              </div>
              <div className="ul-section-new">
                <ul className="right-ul">
                  <p className="footer-titles">FASHION</p>
                  <li>
                    <Link
                      className="fashion"
                      to={{
                        pathname: "/Product Page",
                        state: { route: "everythingnew/fashion", header: "new" }
                      }}
                    >
                      ALL
                    </Link>
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                </ul>

                <ul className="right-ul">
                  <p className="footer-titles">BAGS & ACCESSORIES</p>
                  <li>
                    {" "}
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
                  </li>
                  <li>
                    {" "}
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
                  </li>
                  <li>
                    {" "}
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
                  </li>
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                </ul>

                <ul className="right-ul">
                  <p className="footer-titles">JEWELRY</p>
                  <li>
                    {" "}
                    <Link
                      className="jewelry"
                      to={{
                        pathname: "/Product Page",
                        state: { route: "everythingnew/jewelry", header: "new" }
                      }}
                    >
                      ALL
                    </Link>
                  </li>
                  <li>
                    {" "}
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
                  </li>
                  <li>
                    {" "}
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
                  </li>
                  <li>
                    {" "}
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
                  </li>
                  <li>
                    {" "}
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
                  </li>
                </ul>

                <ul className="right-ul">
                  <p className="footer-titles">Others</p>
                  <li>
                    <Link
                      className="sale"
                      to={{
                        pathname: "/Product Page",
                        state: { route: "everythingnew/sale", header: "new" }
                      }}
                    >
                      SALE
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="about-us"
                      to={{
                        pathname: "/About Us",
                        state: { header: "new" }
                      }}
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-right-section">
            <div className="logo-component">
              <Link to="/">
                <img
                  className="logo11"
                  src="http://localhost:5000/Images/poshcaravan_logo.jpg"
                  alt="PoshCaravan"
                  title="PoshCaravan"
                />
              </Link>
            </div>
            <div className="social-media">
              <a href="https://www.facebook.com/Posh-Caravan-366794210857093/">
                <i class="fab fa-facebook-square" />
              </a>
              <a href="https://www.instagram.com/posh_caravan/">
                <i class="fab fa-instagram" />
              </a>
              <a href="">
                <i class="fab fa-twitter" />
              </a>
              <Link
                to={{
                  pathname: "/About Us",
                  state: { header: "vintage" }
                }}
              >
                <i class="fas fa-phone"></i>
              </Link>
              <Link
                to={{
                  pathname: "/About Us",
                  state: { header: "vintage" }
                }}
              >
                <i class="fas fa-envelope"></i>
              </Link>
              <Link
                to={{
                  pathname: "/About Us",
                  state: { header: "vintage" }
                }}
              >
                <i class="fas fa-map-marked-alt"></i>
              </Link>
            </div>
            <h6>©PoshCaravan 2019</h6>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
