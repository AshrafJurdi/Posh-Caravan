import React from "react";
import HeaderLogo from "../../components/Header-Logo/HeaderLogo";
import HeaderNew from "../../components/Header-EverythingNew/HeaderNew";
import HeaderVintage from "../../components/Header-Vintage&Preloved/HeaderVintage";
import Footer from "../../components/Footer/footer";
import "./aboutus.css";
import AboutUs1 from "../../components/About/AboutUs";
class AboutUs2 extends React.Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        {this.props.location.state.header === "vintage" ? (
          <HeaderVintage />
        ) : (
          <HeaderNew />
        )}
        <AboutUs1 {...this.props} />
        <Footer />
      </div>
    );
  }
}

export default AboutUs2;
