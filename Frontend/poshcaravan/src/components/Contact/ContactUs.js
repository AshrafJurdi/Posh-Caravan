import React from "react";
import "./ContactUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Logo from "./poshcaravan_logo.jpg";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

class ContactUs1 extends React.Component {
  render() {
    console.log("HONNNN");
    return (
      <div className="contactus" eventKey="contactus" title="CONTACT US">
        <Col md={6}>
          <p>
            STORE Via Cavour 20, 35042 ESTE, PD. Italy
            <br />
            Mobile 0039 334 1457054 info@poshcaravan.com
          </p>
          <h2>WE ARE OPEN</h2>
          <p>
            {" "}
            Tuesday to Saturday, from 9.30 to 12.30 - 16.30 to 19.30
            <br /> Monday from 16.30 to 19.30{" "}
          </p>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20STORE%20Via%20Cavour%2020%2C%2035042%20ESTE%2C%20PD.%20Italy&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              Google Maps Generator by{" "}
              <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
            </div>
          </div>
        </Col>
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
      </div>
    );
  }
}

export default ContactUs1;
