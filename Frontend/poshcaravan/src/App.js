import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Home Page/homepage";
import EverythingNewPage from "./pages/Everything New Page/everythingnew";
import VintagePage from "./pages/Vintage Page/vintagepage";
import ProductPage from "./pages/Product Page/productpage";
import Vintageproductcategory from "./components/VintageProductCategory/vintageproductcategory";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route
        path="/pages/Everything New Page/everythingnew"
        component={EverythingNewPage}
      />
      {/* <Route path="/pages/Vintage Page/vintagepage" component={VintagePage} /> */}
      <Route path="/pages/Product Page/productpage" component={ProductPage} />
    </div>
  );
}

export default App;
