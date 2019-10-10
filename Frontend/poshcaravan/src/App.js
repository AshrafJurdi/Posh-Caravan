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
import AboutUs2 from "./pages/About Us Page/aboutus";
import ContactUs from "./pages/ContactUs Page/ContactUs";
import AdminLogin from "./components/AdminLogin/AdminLogin";
// import FormPage from "./pages/Admin Panel Page/FormPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={props => <LandingPage {...props} />} />
        <Route
          path="/EverythingNewPage"
          render={props => <EverythingNewPage {...props} />}
        />
        <Route
          path="/Vintage&PrelovedPage"
          render={props => <VintagePage {...props} />}
        />
        <Route
          path="/Product Page"
          render={props => <ProductPage {...props} />}
        />
        <Route path="/About Us" render={props => <AboutUs2 {...props} />} />
        <Route
          path="/pages/ContactUs/ContactUs"
          render={props => <ContactUs {...props} />}
        />
        <Route path="/admin" render={props => <AdminLogin {...props} />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
