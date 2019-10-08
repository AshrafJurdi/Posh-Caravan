import React from "react";
import HeaderLogo from "../../components/Header-Logo/HeaderLogo";
import HeaderNew from "../../components/Header-EverythingNew/HeaderNew";
import Footer from "../../components/Footer/footer";
import EverythingNewCategories from "../../components/Categories-EverythingNew/everythingnewcategories";

class EverythingNewPage extends React.Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        <HeaderNew {...this.props} />
        <EverythingNewCategories {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

export default EverythingNewPage;
