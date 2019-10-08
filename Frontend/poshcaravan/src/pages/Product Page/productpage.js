import React from "react";
import ProductList from "../../components/Product List/productlist";
import Footer from "../../components/Footer/footer";
import HeaderLogo from "../../components/Header-Logo/HeaderLogo";
import AboutUs from "../../components/About/AboutUs";
import HeaderVintage from "../../components/Header-Vintage&Preloved/HeaderVintage";
import HeaderNew from "../../components/Header-EverythingNew/HeaderNew";
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
