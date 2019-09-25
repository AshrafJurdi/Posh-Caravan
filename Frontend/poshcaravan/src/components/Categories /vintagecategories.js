import React from "react";
import "./vintagecategories.css";
class VintageCategory extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="grid-container">
        <div
          class="image1"
          // style={{
          //   backgroundImage: url(
          //     `http://localhost:5000/Images/${this.state.categories.Category_Image}`
          //   )
          // }}
        ></div>
        <div class="image2"></div>
        <div class="image3"></div>
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
