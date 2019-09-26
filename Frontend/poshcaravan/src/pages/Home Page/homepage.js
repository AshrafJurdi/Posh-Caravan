import React from "react";
import LandingSplash from "../../components/LandingSplash/LandingSplash";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import MainCategory from "../../components/MainCategory/MainCategory";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <LandingSplash />
        <HeaderLogo />
        <MainCategory />
      </div>
    );
  }
}

export default LandingPage;
