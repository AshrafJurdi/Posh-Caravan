import React from "react";
import ProductList from "../../components/Product List/productlist";
import Footer from "../../components/Footer/Footer";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import AboutContactUs from "../../components/ContactAbout/AboutContactUs";

class ProductPage extends React.Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        <ProductList {...this.props} />
        <AboutContactUs />
        <Footer />
      </div>
    );
  }
}

export default ProductPage;
