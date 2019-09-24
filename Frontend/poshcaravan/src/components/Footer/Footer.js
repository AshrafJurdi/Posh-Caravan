import React from "react";
import "./Footer.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./poshcaravan_logo.jpg";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="aboutus" title="About Us">
            Your About Us page is vital. It’s often the first stop in any user’s
            journey through a website or blog. It also shouldn’t be their last,
            because first impressions count online just as much as they do in
            the real world. If your visitors aren’t impressed, you can expect
            them to leave without reading your awesome content or completing a
            conversion action (e.g., signing up for your newsletter, making a
            purchase).
            {/* <Sonnet /> */}
          </Tab>
          <Tab eventKey="contactus" title="Contact Us">
            <div className="FormContainer">
              <h2 className="Formh2">Get in touch</h2>
              <Form className="FormForm" onSubmit={this.handleSubmit}>
                {/* <Form.Label name="name">Your Name</Form.Label>
                <Form.Control
                  placeholder="Full Name"
                  name="name"
                  onChange={this.handleChange}
                /> */}
                {/* <Form.Label name="subject">Subject</Form.Label>
                <Form.Control
                  placeholder="Subject"
                  name="subject"
                  onChange={this.handleChange}
                /> */}
                <Form.Label name="email"></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ENTER YOU EMAIL"
                  name="email"
                  onChange={this.handleChange}
                />
                {["radio"].map(type => (
                  <div
                    key={`inline-${type}`}
                    className="mb-3"
                    style={{ paddingTop: "10px" }}
                  >
                    {/* <Form.Check
                      inline
                      label="Suggestion"
                      type={type}
                      id={`inline-${type}-1`}
                      style={{ color: "white" }}
                    />
                    <Form.Check
                      inline
                      label="Complaint"
                      type={type}
                      id={`inline-${type}-2`}
                      style={{ color: "white" }}
                    /> */}
                  </div>
                ))}
                <Form.Label name="message"></Form.Label>
                <Form.Control placeholder="EMAIL US"
                  as="textarea"
                  rows="3"
                  name="message"
                  onChange={this.handleChange}
                />
                <br />
                <Button
                  variant="light"
                  onClick={this.handleSubmit}
                  type="submit"
                >
                  SEND
                </Button>
              </Form>
              <p>
                {" "}
                OPENING HOURS: Tuesday to Saturday, from 9.30 to 12.30 - 16.30
                to 19.30 Monday from 16.30 to 19.30{" "}
              </p>
            </div>
          </Tab>
          <Tab eventKey="findus" title="Find Us">
            CONTACT US
            <p>
              STORE Via Cavour 20, 35042 ESTE, PD. Italy Mobile 0039 334 1457054
              info@poshcaravan.com
            </p>
            OPENING HOURS:
            <p>
              {" "}
              Tuesday to Saturday, from 9.30 to 12.30 - 16.30 to 19.30 Monday
              from 16.30 to 19.30{" "}
            </p>
          </Tab>
        </Tabs>
        <div className="footerfooter">
          <Link to="/">
            <Image src={Logo} className="Logofooter" />
          </Link>
          <a href="https://www.instagram.com/posh_caravan/">
            <i classname="instagram" class="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/Posh-Caravan-366794210857093/">
            <i classname="facebook" class="fab fa-facebook-square"></i>
          </a>
          {/* <i class="fab fa-twitter"></i> */}
          {/* <i classname="pinterest" class="fab fa-pinterest-square"></i> */}
        </div>
      </div>
    );
  }
}

export default Footer;
