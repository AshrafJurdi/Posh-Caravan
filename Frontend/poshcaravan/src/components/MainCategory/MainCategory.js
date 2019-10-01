import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./MainCategory.css";
import { Link } from "react-router-dom";
import { MDBCardImage } from "mdbreact";

class MainCategory extends Component {
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
          <Col xs={6} md={6}>
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

          <Col xs={6} md={6}>
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
      //   <div className="main-cat-div">
      //     <div className="main-vin-cat">
      //       {this.state.maincategory.length !== 0 ? (
      //         <img
      //           src={`http://localhost:5000/Images/${this.state.maincategory[0].MainCategoryImage}`}
      //         ></img>
      //       ) : null}
      //     </div>
      //     <div className="main-new-cat">
      //       {this.state.maincategory.length !== 0 ? (
      //         <img
      //           src={`http://localhost:5000/Images/${this.state.maincategory[1].MainCategoryImage}`}
      //         ></img>
      //       ) : null}
      //     </div>
      //   </div>
      // </div>
    );
  }
}
export default MainCategory;
