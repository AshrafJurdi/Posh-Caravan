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
import Vintageproductcategory from "./components/VintageProductCategory/vintageproductcategory";
import ProductList from "./components/Product List/productlist";
import EverythingNewCategories from "./components/Categories /everythingnewcategories";

function App() {
  return (
    <div className="App">
      <EverythingNewCategories />
      <Switch>
        {/* <Route path="/" exact component={LandingPage} />
        <Route
          path="/pages/Everything New Page/everythingnew"
          component={EverythingNewPage}
        />
        <Route path="/pages/Vintage Page/vintagepage" component={VintagePage} />
        <Route path="/pages/Product Page/productpage" component={ProductPage} />
        <Route path="/pages/About Us Page/aboutus" component={AboutUs} />

        <Route path="/" exact component={LandingPage} />
        <Route
          path="/pages/Everything New Page/everythingnew"
          component={EverythingNewPage}
        /> */}
        <Route path="/pages/Vintage Page/vintagepage" component={VintagePage} />
        <Route
          path="/pages/Product Page/productpage"
          render={props => <ProductList {...props} />}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
