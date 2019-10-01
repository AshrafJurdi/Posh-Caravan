import React from "react";
import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./poshcaravan_logo.jpg";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

class AboutUs1 extends React.Component {
  render() {
    return (
      <div className="aboutus" title="ABOUT US">
        <div className="textabout">
          Your About Us page is vital. It’s often the first stop in any user’s
          journey through a website or blog. It also shouldn’t be their last,
          because first impressions count online just as much as they do in the
          real world. If your visitors aren’t impressed, you can expect them to
          leave without reading your awesome content or completing a conversion
          action (e.g., signing up for your newsletter, making a purchase).
        </div>
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

export default AboutUs1;
