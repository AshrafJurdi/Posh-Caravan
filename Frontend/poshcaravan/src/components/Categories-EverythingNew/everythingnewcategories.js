import React from "react";
import { Link } from "react-router-dom";
import "../Categories-Vintage&Preloved/categories.css";
class EverythingNewCategories extends React.Component {
  constructor() {
    super();
    //this.c = {}; //this.state.categories.find(c => c.CategoryName == "Fashion");
    //this.image3 = ""; //c.CategoryImage;
    this.state = {
      categories: [],
      image3: "",
      image4: "",
      image6: ""
    };
  }
  // ${this.props.location.state.route}
  componentDidMount = async () => {
    try {
      let url = `${process.env.REACT_APP_APP_URL}/everythingnew/categories`;
      console.log(url);
      const response = await fetch(url);
      const categories = await response.json();
      this.setState({ categories });
      //
      const c1 = this.state.categories.find(c => c.CategoryName == "Fashion");
      const newimage3 = c1.CategoryImage;
      this.setState({ image3: newimage3 });
      //
      const c2 = this.state.categories.find(c => c.CategoryName == "Jewelry");
      const newimage4 = c2.CategoryImage;
      this.setState({ image4: newimage4 });
      //
      const c3 = this.state.categories.find(
        c => c.CategoryName == "Bags & Accessories"
      );
      const newimage6 = c3.CategoryImage;
      this.setState({ image6: newimage6 });
      console.log("categories===>", categories);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    //  const imageName =   this.state.categories.length > 1 &&  this.state.categories[1].CategoryImage;
    return (
      <div className="grid-container1">
        <Link
          className="image1" style={{backgroundImage: `URL('${process.env.REACT_APP_APP_URL}/Images/mainpic.jpg')`}}
          to={{
            pathname: "/Product Page",
            state: { route: "everythingnew/allproducts" }
          }}
        />

        <div className="image2"
             style={{backgroundImage: `URL('${process.env.REACT_APP_APP_URL}/Images/youarebeautiful.jpg')`}}
       />
        {this.state.categories.length > 1 ? (
          <>
            <Link
              className="image3"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_APP_URL}/Images/${this.state.image3})`
              }}
              to={{
                pathname: "/Product Page",
                state: { route: "everythingnew/fashion" }
              }}
            ></Link>
            <div className="line1"></div>
            <Link
              className="image4"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_APP_URL}/Images/${this.state.image4})`
              }}
              to={{
                pathname: "/Product Page",
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
                backgroundImage: `url(${process.env.REACT_APP_APP_URL}/Images/${this.state.image6})`
              }}
              to={{
                pathname: "/Product Page",
                state: { route: "everythingnew/bagsandaccessories/bags" }
              }}
            ></Link>
            <div className="image8">
              <h1 className="bottomSideText">UNI QUE IN EVERY OCCA SSION</h1>
            </div>
            <Link
              className="image7"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_APP_URL}/Images/newdresses.jpg)`
              }}
              to={{
                pathname: "/Product Page",
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

export default EverythingNewCategories;
