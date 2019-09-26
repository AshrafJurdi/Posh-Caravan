import React from "react";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import HeaderNew from "../../components/Headers/HeaderNew";
import AboutContactUs from "../../components/ContactAbout/AboutContactUs";
import Footer from "../../components/Footer/Footer";

class EverythingNewPage extends React.Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        <HeaderNew />
        <AboutContactUs />
        <Footer />
      </div>
    );
  }
}

export default EverythingNewPage;
