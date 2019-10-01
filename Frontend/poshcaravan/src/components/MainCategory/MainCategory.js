import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./MainCategory.css";
import { Link } from "react-router-dom";

/** Main component page that display two pictures that allow me to connect to the Vintage or Everything New pages
 *
 * @module MainCategory
 */

class MainCategory extends Component {
  /**
   * @function
   */

  /**
   * @object
   */
  constructor() {
    super();

    this.state = {
      category: [
        { name: "Vinatge & Pre Loved", image: "/poshcaravan_landingimg1.jpg" },
        { name: "Everything New", image: "/poshcaravan_landingimg2.jpg" }
      ]
    };
  }
  /**
   * Renders the component.
   * @function render
   * @return two iamges that redirect to vintage or everything new pages
   *
   */
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={6} md={6}>
              <Link className="vintage" to="/pages/Vintage Page/vintagepage">
                <Image
                  src={process.env.PUBLIC_URL + this.state.category[0].image}
                  alt="first"
                  className="landingImg"
                  fluid
                />
              </Link>
            </Col>

            <Col xs={6} md={6}>
              <Link
                className="New"
                to="/pages/Everything New Page/everythingnew"
              >
                <Image
                  src={process.env.PUBLIC_URL + this.state.category[1].image}
                  alt="secand"
                  className="landingImg"
                  fluid
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainCategory;
