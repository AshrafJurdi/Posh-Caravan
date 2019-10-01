import React from "react";
import LandingSplash from "../../components/LandingSplash/LandingSplash";
import HeaderLogo from "../../components/Headers/HeaderLogo";
import HeaderVintage from "../../components/Headers/HeaderVintage";
import Footer from "../../components/Footer/Footer";
import MainCategory from "../../components/MainCategory/MainCategory";
import AdminLogin from "../../components/AdminLogin/AdminLogin";
import ProductList from "../../components/Product List/productlist";
import ProductCard from "../../components/ProductCard/ProductCard";
import Itempopup from "../../components/Itempopup/Itempopup";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <LandingSplash />
        <HeaderLogo />
        <MainCategory {...this.props} />
      </div>
    );
  }
}

export default LandingPage;
