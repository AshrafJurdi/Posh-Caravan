import React from "react";
import "./AboutContactUs.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AboutContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async event => {
    const { email, message } = this.state;
    console.log("babs", this.state);
    try {
      const form = await fetch("http://localhost:5000/contact", {
        method: "POST",
        body: JSON.stringify({ email, message }),
        headers: { "Content-Type": "application/json" }
      });
      console.log(form);
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log("HONNNN");
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
            <Container>
              <Row>
                <Col md={6}>
                  <div className="FormContainer">
                    <h2 className="Formh2">GET IN TOUCH</h2>
                    <Form className="FormForm">
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
                        ></div>
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
                        textarea
                      >
                        SEND
                      </Button>
                    </Form>
                  </div>
                </Col>

                {/* FIND US TAB  .................... */}
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
                      <a href="https://www.embedgooglemap.net">
                        embedgooglemap.net
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Tab>

          {/* CONTACT US FORM */}
        </Tabs>
      </div>
    );
  }
}

export default AboutContactUs;
