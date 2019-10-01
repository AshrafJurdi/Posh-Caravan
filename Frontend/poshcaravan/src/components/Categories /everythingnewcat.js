import React from "react";
import { Link } from "react-router-dom";
// import "./categories.css";
class EverythingNewCat extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }
  // ${this.props.location.state.route}
  componentDidMount = async () => {
    try {
      let url = `http://localhost:5000/everythingnew/categories`;
      console.log(url);
      const response = await fetch(url);
      const categories = await response.json();
      this.setState({ categories });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="main-div">
        <div className="div1">
          <div className="left-div1">
            <div className="left-left-div1"></div>
            <div className="right-left-div1"></div>
          </div>
          <div className="right-div1"></div>
        </div>
        <div className="div2">
          <div className="left-div2"></div>
          <div className="right-div2"></div>
        </div>
        <div className="div3">
          <div className="left-div3"></div>
          <div className="right-div3"></div>
        </div>
        <div className="div4">
          <div className="left-div4"></div>
          <div className="right-div4"></div>
        </div>
      </div>
    );
  }
}

export default EverythingNewCat;
