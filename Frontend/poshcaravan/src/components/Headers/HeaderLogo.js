import React from "react";
import Logo from "./poshcaravan_logo.jpg";
import "./Headers.css";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class HeaderLogo extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <Image src={Logo} className="HeaderLogo" />
        </Link>
      </div>
    );
  }
}

export default HeaderLogo;
