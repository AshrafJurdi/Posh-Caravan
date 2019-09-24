import React from "react";
import LandingSplash from "../../components/LandingSplash/LandingSplash";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import Footer from "../../components/Footer/Footer";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <LandingSplash />
        <HeaderLogo />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
