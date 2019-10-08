import React from "react";
import LandingSplash from "../../components/LandingSplash/LandingSplash";
import HeaderLogo from "../../components/Header-Logo/HeaderLogo";
import MainCategory from "../../components/MainCategory/MainCategory";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <LandingSplash />
        <HeaderLogo />
        <MainCategory {...this.props} />
        <div
          style={{ width: "100%", height: "30px", backgroundColor: "pink" }}
        ></div>
      </div>
    );
  }
}

export default LandingPage;
