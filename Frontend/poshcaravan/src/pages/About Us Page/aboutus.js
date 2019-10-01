import React, { Component } from "react";
import "./aboutus.css";
import AboutUs1 from "../../components/About/AboutUs";
class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <AboutUs1 {...this.props} />
      </div>
    );
  }
}

export default AboutUs;
