import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer11">
          <div className="footer-left-section">
            <div className="logo-component">
              <a href="">
                <img
                  className="logo11"
                  src="http://localhost:5000/Images/poshcaravan_logo.jpg"
                  alt="WashyWash"
                  title="WashyWash"
                />
              </a>
            </div>
          </div>
          <div className="footer-middle-section">
            <div className="ul-section11">
              <ul className="left-ul">
                <li>
                  <a href=""> Services</a>
                </li>
                <br />
                <li>
                  <a href="">About Us</a>{" "}
                </li>
              </ul>
              <ul className="right-ul">
                <li>
                  <a href=""> Contact Us</a>
                </li>
                <br />
                <li>
                  <a href=""> Locate Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-right-section">
            <div className="follow-us">
              <div>
                <h2>Follow Us</h2>
              </div>
              <br />
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
              </div>
            </div>
            <h5>©PoshCaravan 2019</h5>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
