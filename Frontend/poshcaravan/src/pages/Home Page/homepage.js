import React from "react";
import LandingSplash from "../../components/LandingSplash/LandingSplash";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import HeaderVintage from "../../components/Headers/HeaderVintage";
import Footer from "../../components/Footer/Footer";
import MainCategory from "../../components/MainCategory/MainCategory";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <LandingSplash />
        <HeaderVintage />
        <MainCategory />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
