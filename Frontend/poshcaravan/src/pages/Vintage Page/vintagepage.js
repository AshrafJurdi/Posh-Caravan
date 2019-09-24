import React from "react";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import HeaderVintage from "../../components/Headers/HeaderVintage";
import Footer from "../../components/Footer/Footer";

class VintagePage extends React.Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        <HeaderVintage />
        <Footer />
      </div>
    );
  }
}

export default VintagePage;
