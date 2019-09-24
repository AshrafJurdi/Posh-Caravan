import React from "react";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import HeaderNew from "../../components/Headers/HeaderNew";
import Footer from "../../components/Footer/Footer";

class EverythingNewPage extends React.Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        <HeaderNew />
        <Footer />
      </div>
    );
  }
}

export default EverythingNewPage;
