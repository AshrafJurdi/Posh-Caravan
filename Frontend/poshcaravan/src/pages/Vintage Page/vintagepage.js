import React from "react";
import HeaderLogo from "../../components/Header-Logo/HeaderLogo";
import HeaderVintage from "../../components/Header-Vintage&Preloved/HeaderVintage";
import Footer from "../../components/Footer/footer";
import VintageCategories from "../../components/Categories-Vintage&Preloved/vintagecategories";

class VintagePage extends React.Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        <HeaderVintage {...this.props} />
        <VintageCategories {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

export default VintagePage;
