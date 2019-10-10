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
        <div
          style={{
            width: "40vw",
            backgroundColor: "rgba(255, 192, 203, 0.863)",
            height: "30px",
            float: "left",

            position: "absolute",
            top: "70vh",
            zIndex: "-1",
            boxShadow:
              "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
          }}
        ></div>

        <div className="mission-vision-container">
          <div className="textabout1">
            <h3 style={{ fontFamily: "Raleway, sans-serif" }}>About Us</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              mollitia debitis numquam delectus, autem, quas itaque architecto
              voluptates eos accusantium, officia consequuntur cum temporibus. A
              quas maxime harum officiis ipsam.
            </p>
          </div>
          <div className="textabout2">
            <h3 style={{ fontFamily: "Raleway, sans-serif" }}>Mission</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              mollitia debitis numquam delectus, autem, quas itaque architecto
              voluptates eos accusantium, officia consequuntur cum temporibus. A
              quas maxime harum officiis ipsam.
            </p>
          </div>
          <div className="textabout3">
            <h3 style={{ fontFamily: "Raleway, sans-serif" }}>Vision</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              mollitia debitis numquam delectus, autem, quas itaque architecto
              voluptates eos accusantium, officia consequuntur cum temporibus. A
              quas maxime harum officiis ipsam.
            </p>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "30px",
            backgroundColor: "rgba(255, 192, 203, 0.863)",
            boxShadow:
              "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
          }}
        ></div>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <div className="map-location-posh" style={{ width: "50%" }}>
            <div>
              <h3
                style={{ marginTop: "40px", fontFamily: "Raleway, sans-serif" }}
              >
                Locate Us
              </h3>
              <div>
                <div className="map-map">
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
            </div>
          </div>
          <div className="contactus-posh" style={{ width: "50%" }}>
            <div>
              <h3
                style={{ marginTop: "40px", fontFamily: "Raleway, sans-serif" }}
              >
                Contact Us
              </h3>
              <div>
                <div
                  style={{
                    margin: "30px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <i
                    className="fas fa-phone"
                    style={{ paddingRight: "15px", alignItems: "center" }}
                  ></i>
                  <p tyle={{ alignItems: "center" }}>0039 334 1457054</p>
                </div>
                <div
                  style={{
                    margin: "30px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <i
                    className="fas fa-envelope"
                    style={{ paddingRight: "15px", alignItems: "center" }}
                  ></i>
                  <p tyle={{ alignItems: "center" }}>info@poshcaravan.com</p>
                </div>
                <div
                  style={{
                    margin: "30px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <a
                    className="facebook-poshcaravan"
                    href="https://www.facebook.com/Posh-Caravan-366794210857093/"
                  >
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a
                    className="insta-poshcaravan"
                    href="https://www.instagram.com/posh_caravan/"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          style={{
            width: "40vw",
            backgroundColor: "rgba(255, 192, 203, 0.863)",
            height: "30px",
            float: "right",

            position: "relative",
            bottom: "35vh",
            zIndex: "-1",
            boxShadow:
              "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
          }}
        ></div> */}
      </div>
    );
  }
}

export default AboutUs1;
