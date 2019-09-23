import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./MainCategory.css";
// import { Link } from "react-router-dom";

class MainCategory extends Component {
  constructor() {
    super();
    this.state = {
      category: [
        { name: "Vinatge & Pre Loved", image: "/poshcaravan_landingimg1.jpg" },
        { name: "Everything New", image: "/poshcaravan_landingimg2.jpg" }
      ]
    };
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={6} md={6}>
              {/* <a href="https://www.w3schools.com/html/"> */}
              {/* <Link
                to={{
                  pathname: "/VintageProductCategory/vintageproductcategory>"
                }}
              > */}
              <Image
                src={process.env.PUBLIC_URL + this.state.category[0].image}
                alt="first"
                className="landingImg"
                fluid
              />
              {/* </Link> */}
              {/* </a> */}
            </Col>

            <Col xs={6} md={6}>
              <a href="https://poshcaravan.tk/">
                <Image
                  src={process.env.PUBLIC_URL + this.state.category[1].image}
                  alt="secand"
                  className="landingImg"
                  fluid
                />
              </a>
            </Col>
          </Row>
        </Container>
        {/* <Container>
                    <Row>
                        <Col ></Col>
                        <Col ></Col>
                    </Row>
                    
                </Container> */}
      </div>
    );
  }
}

export default MainCategory;
