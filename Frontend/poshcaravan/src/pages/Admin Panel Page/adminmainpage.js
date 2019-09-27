import React, { Component } from "react";
// import HeaderLogo from "./Headers/HeaderLogo";
// import HeaderNew from "./Headers/HeaderNew";

class adminmainpage extends Component {
  render() {
    return (
      <div>
        {/* <HeaderLogo /> */}
        {/* <HeaderNew /> */}
        class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      product: null,
      activePage: 1,
      products: []
    };
  }
  componentDidMount = async () => {
    try {
      let url = `http://localhost:5000/${this.props.location.state.route}`;
      console.log(url);
      const response = await fetch(url);
      const products = await response.json();
      this.setState({ products });
      console.log(products);
    } catch (err) {
      console.log(err);
    }
  };
  toggle = ID => {
    // let modalNumber = "modal" + nr;
    console.log(ID);
    if (ID) {
      console.log("here?");
      const product = this.state.products.find(
        product => product.Product_ID === ID
      );
      this.setState({ product });
    }
    this.setState({ show: !this.state.show });
  };
  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  };
  render() {
    return (
      <div>
        <HeaderVintage />
        <div className="productList">
          {" "}
          {this.state.products.map((product, index) => {
            if (
              index < this.state.activePage * 12 &&
              index >= (this.state.activePage - 1) * 12
            ) {
              return (
                <ProductCard
                  toggle={this.toggle}
                  product={product}
                  key={index}
                />
              );
            }
          })}{" "}
        </div>{" "}
        <Itempopup
          toggle={this.toggle}
          show={this.state.show}
          product={this.state.product}
        />{" "}
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={12}
          totalItemsCount={this.state.products.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />{" "}
      </div>
    );
  }
}
export default ProductList;




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
