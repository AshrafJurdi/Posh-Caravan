import React from "react";
import ProductList from "../../components/Product List/productlist";
import Footer from "../../components/Footer/Footer";
import HeaderLogo from "../../components/Headers/HeaderLogo";

class ProductPage extends React.Component {
  render() {
    return (
      <div>
      <HeaderLogo />
        <ProductList />
        <Footer />
      </div>
    );
  }
}

export default ProductPage;
