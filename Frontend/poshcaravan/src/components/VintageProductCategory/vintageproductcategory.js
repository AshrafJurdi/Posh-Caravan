import React, { Component } from "react";
import "./vintageproductcategory.css";
// import Container from 'react-bootstrap/Container'

class Vintageproductcategory extends Component {
  constructor() {
    super();
    this.state = {
      category: [
        { name: "Bags", image: "/poshcaravan_midsection_img1.jpg" },

        { name: "Clothes", image: "/poshcaravan_midsection_img2.jpg" },
        {
          name: "Accessories",
          image: "/alexandra-gorn-WF0LSThlRmw-unsplash_img3.jpg"
        },

        {
          name: "Jewelry",
          image: "/heather-ford-Tw9iB8TGRGI-unsplash_img4.jpg"
        },
        { name: "Shoes", image: "/preloved_img5.jpg" },
        {
          name: "anything",
          image: "/charisse-kenion-69epvVgm0Ws-unsplash_img6.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="grid-container">
          <div className="div-image1">
            <img
              className="img1-1 img-width"
              src={process.env.PUBLIC_URL + this.state.category[0].image}
              alt=""
              fluid
            />
          </div>
          <div className="div-image2">
            <img
              className="img1-2 img-width"
              src={process.env.PUBLIC_URL + this.state.category[1].image}
              alt=""
              fluid
            />
          </div>
          <div className="div-image3">
            <img
              className="img1-3 img-width"
              src={process.env.PUBLIC_URL + this.state.category[2].image}
              alt=""
              fluid
            />
          </div>

          <div class="div-image4">
            <img
              className="img1-4 img-width"
              src={process.env.PUBLIC_URL + this.state.category[3].image}
              alt=""
              fluid
            />
          </div>
          <div class="line-div"></div>
          <div class="div-image6 img-width">
            <h3 style={{ color: "white", textAlign: "right" }}>
              CONFIDENCE<br></br>TAKES YOU<br></br>ANYWHERE<br></br>YOU WANT
            </h3>
          </div>
          <div class="div-image5">
            <img
              className="img1-5 img-width"
              src={process.env.PUBLIC_URL + this.state.category[4].image}
              alt="dddd"
              fluid
            />
          </div>
          <div class="div-image7">
            <img
              className="img1-7 img-width"
              src={process.env.PUBLIC_URL + this.state.category[5].image}
              alt=""
              fluid
            />
          </div>
          <div class="div-image8">
            <h2
              style={{
                color: "pink",
                textAlign: "center",
                padding: "300px 0 100px 0"
              }}
            >
              UNI<br></br>QUE IN<br></br>E VER Y<br></br> OCCA<br></br>SSION
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
export default Vintageproductcategory;
