import React from "react";
import "./AboutContactUs.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AboutContactUs extends React.Component {
  render() {
    return (
      <div className="contactaboutus">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="aboutus" title="ABOUT US">
            Your About Us page is vital. It’s often the first stop in any user’s
            journey through a website or blog. It also shouldn’t be their last,
            because first impressions count online just as much as they do in
            the real world. If your visitors aren’t impressed, you can expect
            them to leave without reading your awesome content or completing a
            conversion action (e.g., signing up for your newsletter, making a
            purchase).
            {/* <Sonnet /> */}
          </Tab>
          <Tab eventKey="contactus" title="CONTACT US">
            <div className="FormContainer">
              <h2 className="Formh2">Get in touch</h2>
              <Form className="FormForm" onSubmit={this.handleSubmit}>
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
                <Form.Control
                  placeholder="EMAIL US"
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
          <Tab eventKey="findus" title="FIND US">
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
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.9080596339372!2d11.652535515090488!3d45.22942747909885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f1dfd2de65411%3A0xf23420939e11fb9!2sVia%20Cavour%2C%2020%2C%2035042%20Este%20PD%2C%20Italy!5e0!3m2!1sen!2slb!4v1569500833815!5m2!1sen!2slb"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default AboutContactUs;
