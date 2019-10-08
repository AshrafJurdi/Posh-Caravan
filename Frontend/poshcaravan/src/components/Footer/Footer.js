import React from "react";
// import "./Footer1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./poshcaravan_logo.jpg";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";

class Footer1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, message } = this.state;

    console.log("babs", this.state);

    const form = fetch("http://localhost:5000/contact", {
      method: "POST",
      body: JSON.stringify({ email, message }),
      headers: { "Content-Type": "application/json" }
    });

    this.setState({ email: "", message: "" });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="all-footer">
        <div className="Head-footer">
          <Navbar expand="lg" className="NavBar">
            <Link className="repage" to="/pages/About Us Page/aboutus">
              ABOUT US
            </Link>
            <Link className="repage" to="/pages/ContactUs/ContactUs">
              CONTACT US
            </Link>
          </Navbar>
        </div>

        <div className="mailer">
          <Container>
            <Row>
              <Col md={6}>
                <div className="FormContainer">
                  <Form className="FormForm">
                    <Form.Label name="email"></Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="ENTER YOUR EMAIL"
                      name="email"
                      onChange={this.handleChange}
                    />
                    {["radio"].map(type => (
                      <div
                        key={`inline-${type}`}
                        className="mb-3"
                        style={{ paddingTop: "10px" }}
                      ></div>
                    ))}
                    <Form.Label name="message"></Form.Label>
                    <Form.Control
                      placeholder="HOW CAN WE HELP YOU?"
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
                      textarea
                    >
                      SEND
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
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

export default Footer1;
