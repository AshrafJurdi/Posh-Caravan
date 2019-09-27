import React, { Component } from "react";
// import HeaderLogo from "./Headers/HeaderLogo";
// import HeaderNew from "./Headers/HeaderNew";

class adminmainpage extends Component {
  render() {
    return (
      <div>
        {/* <HeaderLogo /> */}
        {/* <HeaderNew /> */}

        <button
          type="button"
          class="btn btn-info btn-rounded"
          //   onClick={() => deleteProduct(Porduct_ID)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default adminmainpage;
