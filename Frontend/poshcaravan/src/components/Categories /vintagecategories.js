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
      let url = `http://localhost:5000/vintagepreloved/allproducts`;
      console.log(url);
      const response = await fetch(url);
      const categories = await response.json();
      this.setState({ categories });
      console.log(this.state.categories[1].CategoryImage);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    //  const imageName =   this.state.categories.length > 1 &&  this.state.categories[1].CategoryImage;
    return (
      <div className="grid-container1">
        <Link
          class="image1"
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
                backgroundImage: `url(http://localhost:5000/Images/${this.state.categories[1].CategoryImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionY: "top",
                width: "90%",
                marginLeft: "7%"
              }}
              to={{
                pathname: "/pages/Product Page/productpage",
                state: { route: "vintage&preloved/clothes" }
              }}
            ></Link>
            <div className="line1"></div>
            <Link
              className="image4"
              style={{
                backgroundImage: `url(http://localhost:5000/Images/${this.state.categories[3].CategoryImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionY: "top",
                marginRight: "7%",
                marginTop: "2%",
                width: "95%"
              }}
              to={{
                pathname: "/pages/Product Page/productpage",
                state: { route: "vintage&preloved/bagsandaccessories" }
              }}
            ></Link>
            <div className="image5">
              <h2 className="bottomText">
                CONFIDENCE TAKES YOU ANYWHERE YOU WANT
              </h2>
            </div>
            <Link
              class="image6"
              style={{
                backgroundImage: `url(http://localhost:5000/Images/${this.state.categories[2].CategoryImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionY: "center",
                marginLeft: "4.5%",
                width: "100%"
              }}
              to={{
                pathname: "/pages/Product Page/productpage",
                state: { route: "vintage&preloved/bagsandaccessories/bags" }
              }}
            ></Link>
            <div className="image8">
              <h1 className="bottomSideText">UNI QUE IN EVERY OCCA SSION</h1>
            </div>
            <Link
              class="image7"
              style={{
                backgroundImage: `url(http://localhost:5000/Images/${this.state.categories[4].CategoryImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionY: "center",
                marginRight: "4%",
                width: "95%"
              }}
              to={{
                pathname: "/pages/Product Page/productpage",
                state: { route: "vintage&preloved/clothes/dresses" }
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
