import React from "react";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import LandingSplash from "../../components/LandingSplash/LandingSplash";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import Footer from "../../components/Footer/Footer";
import MainCategory from "../../components/MainCategory/MainCategory";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <LandingSplash />
        <HeaderLogo />
        <MainCategory />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
