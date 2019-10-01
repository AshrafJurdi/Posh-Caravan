import React from "react";
import ProductList from "../../components/Product List/productlist";
import Footer from "../../components/Footer/Footer";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import AboutUs from "../../components/About/AboutUs";
import HeaderVintage from "../../components/Headers/HeaderVintage";
import HeaderNew from "../../components/Headers/HeaderNew";
class ProductPage extends React.Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        {this.props.location.state.header === "vintage" ? (
          <HeaderVintage />
        ) : (
          <HeaderNew />
        )}
        <ProductList EditMode={false} {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}

export default ProductPage;
