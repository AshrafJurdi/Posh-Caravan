import React from "react";
import "./vintagecategories.css";
class VintageCategory extends React.Component {
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
      console.log(categories);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div class="grid-container">
        <div class="image1"></div>
        <div class="image2"></div>
        <div
          class="image3"
          // style={{
          //   backgroundImage: new URL(
          //     `http://localhost:5000/Images/${this.state.categories.CategoryImage}`
          //   )
          // }}
        ></div>
        <div class="line1"></div>
        <div class="image4"></div>
        <div class="image5"></div>
        <div class="image6"></div>
        <div class="image8"></div>
        <div class="image7"></div>
      </div>
    );
  }
}

export default VintageCategory;
