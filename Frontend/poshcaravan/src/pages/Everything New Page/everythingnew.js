import React from "react";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import HeaderNew from "../../components/Headers/HeaderNew";
import AboutUs from "../../components/About/AboutUs";
import Footer1 from "../../components/Footer/Footer";
import EverythingNewCategories from "../../components/Categories /everythingnewcategories";

class EverythingNewPage extends React.Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        <HeaderNew {...this.props} />
        <EverythingNewCategories {...this.props} />
        <Footer1 {...this.props} />
      </div>
    );
  }
}

export default EverythingNewPage;
