import React from "react";
import { Link } from "react-router-dom";
import "./categories.css";
class VintageCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }
  // ${this.props.location.state.route}
  componentDidMount = async () => {
    try {
      let url = `http://localhost:5000/Vintage/categories`;
      console.log(url);
      const response = await fetch(url);
      const categories = await response.json();
      this.setState({ categories });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    //  const imageName =   this.state.categories.length > 1 &&  this.state.categories[1].CategoryImage;
    return (
      <div className="grid-container1">
        <Link
          className="image1"
          to={{
            pathname: "/pages/Product Page/productpage",
            state: { route: "everythingnew/allproducts" }
          }}
        ></Link>

        <div className="image2"></div>
        {this.state.categories.length > 1 ? (
          <>
            <Link
              className="image3"
              style={{
                backgroundImage: `url(http://localhost:5000/Images/${this.state.categories[1].CategoryImage})`
              }}
              to={{
                pathname: "/pages/Product Page/productpage",
                state: { route: "everythingnew/fashion" }
              }}
            ></Link>
            <div className="line1"></div>
            <Link
              className="image4"
              style={{
                backgroundImage: `url(http://localhost:5000/Images/${this.state.categories[3].CategoryImage})`
              }}
              to={{
                pathname: "/pages/Product Page/productpage",
                state: { route: "everythingnew/bagsandaccessories" }
              }}
            ></Link>
            <div className="image5">
              <h2 className="bottomText">
                CONFIDENCE TAKES YOU ANYWHERE YOU WANT
              </h2>
            </div>
            <Link
              className="image6"
              style={{
                backgroundImage: `url(http://localhost:5000/Images/${this.state.categories[2].CategoryImage})`
              }}
              to={{
                pathname: "/pages/Product Page/productpage",
                state: { route: "everythingnew/bagsandaccessories/bags" }
              }}
            ></Link>
            <div className="image8">
              <h1 className="bottomSideText">UNI QUE IN EVERY OCCA SSION</h1>
            </div>
            <Link
              className="image7"
              style={{
                backgroundImage: `url(http://localhost:5000/Images/${this.state.categories[4].CategoryImage})`
              }}
              to={{
                pathname: "/pages/Product Page/productpage",
                state: { route: "everythingnew/fashion/dresses" }
              }}
            ></Link>
            <div className="image9"></div>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default VintageCategories;
