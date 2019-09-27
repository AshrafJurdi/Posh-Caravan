import React from "react";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import HeaderVintage from "../../components/Headers/HeaderVintage";
import Footer from "../../components/Footer/Footer";
import AboutContactUs from "../../components/ContactAbout/AboutContactUs";
import VintageCategories from "../../components/Categories /vintagecategories";

class VintagePage extends React.Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        <HeaderVintage {...this.props} />
        <VintageCategories {...this.props} />
        <AboutContactUs {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

export default VintagePage;
