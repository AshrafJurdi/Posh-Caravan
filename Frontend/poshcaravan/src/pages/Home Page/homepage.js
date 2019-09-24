import React from "react";
import HeaderLogo from "../../components/Headers/HeaderLogo"
import LandingSplash from "../../components/LandingSplash/LandingSplash";
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
