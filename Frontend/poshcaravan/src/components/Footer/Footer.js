import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./poshcaravan_logo.jpg";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Link to="/">
          <Image src={Logo} className="Logofooter" />
        </Link>
        <a href="https://www.instagram.com/posh_caravan/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/Posh-Caravan-366794210857093/">
          <i className="fab fa-facebook-square"></i>
        </a>
      </div>
    );
  }
}

export default Footer;
