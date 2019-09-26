import React from "react";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import HeaderVintage from "../../components/Headers/HeaderVintage";
import Footer from "../../components/Footer/Footer";
import AboutContactUs from "../../components/ContactAbout/AboutContactUs";

class VintagePage extends React.Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        <HeaderVintage />
       <AboutContactUs />
        <Footer />
      </div>
    );
  }
}

export default VintagePage;
