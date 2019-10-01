import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import LandingPage from "./pages/Home Page/homepage";
import EverythingNewPage from "./pages/Everything New Page/everythingnew";
import VintagePage from "./pages/Vintage Page/vintagepage";
import ProductPage from "./pages/Product Page/productpage";
import AboutUs from "./pages/About Us Page/aboutus";
import MainCategory from "./components/MainCategory/MainCategory";
import ProductList from "./components/Product List/productlist";
import VintageCategory from "./components/Categories /vintagecategories";
import Adminpanelpage from "./pages/Admin Panel Page/adminpanelpage";
import EverythingNewCategories from "./components/Categories /everythingnewcategories";
// import FormPage from "./pages/Admin Panel Page/FormPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={props => <LandingPage {...props} />} />
        <Route
          path="/pages/Everything New Page/everythingnew"
          render={props => <EverythingNewPage {...props} />}
        />
        <Route
          path="/pages/Vintage Page/vintagepage"
          render={props => <VintagePage {...props} />}
        />
        <Route
          path="/pages/Product Page/productpage"
          render={props => <ProductPage {...props} />}
        />
        <Route
          path="/pages/About Us Page/aboutus"
          render={props => <AboutUs {...props} />}
        />
        <Route path="/admin" render={props => <Adminpanelpage {...props} />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
