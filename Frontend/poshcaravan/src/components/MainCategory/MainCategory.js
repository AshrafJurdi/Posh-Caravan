import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./MainCategory.css";
import { Link } from "react-router-dom";
import { MDBCardImage } from "mdbreact";

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
      maincategory: []
    };
  }

  componentDidMount = async () => {
    try {
      let url = `http://localhost:5000/maincategories`;
      console.log(url);
      const response = await fetch(url);
      const maincategory = await response.json();
      this.setState({ maincategory });
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      // <div>
      <Container className="main-cat-container">
        <Row>
          <Col xs={12} md={6}>
            <Link className="vintage" to="/pages/Vintage Page/vintagepage">
              {this.state.maincategory.length !== 0 ? (
                <MDBCardImage
                  src={`http://localhost:5000/Images/${this.state.maincategory[0].MainCategoryImage}`}
                  alt="first"
                  className="landingImg"
                  fluid
                  zoom
                />
              ) : null}
            </Link>
          </Col>

          <Col xs={12} md={6}>
            <Link className="New" to="/pages/Everything New Page/everythingnew">
              {this.state.maincategory.length !== 0 ? (
                <MDBCardImage
                  src={`http://localhost:5000/Images/${this.state.maincategory[1].MainCategoryImage}`}
                  alt="secand"
                  className="landingImg"
                  fluid
                  zoom
                />
              ) : null}
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MainCategory;
