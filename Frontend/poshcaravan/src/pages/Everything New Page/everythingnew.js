import React from "react";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import HeaderNew from "../../components/Headers/HeaderNew";
import AboutContactUs from "../../components/ContactAbout/AboutContactUs";
import Footer from "../../components/Footer/Footer";
import EverythingNewCategories from "../../components/Categories /everythingnewcategories";

class EverythingNewPage extends React.Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        <HeaderNew {...this.props} />
        <EverythingNewCategories {...this.props} />
        <AboutContactUs {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

export default EverythingNewPage;
