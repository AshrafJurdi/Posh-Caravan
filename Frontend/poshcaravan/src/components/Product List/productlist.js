import React from "react";
import Itempopup from "../Itempopup/Itempopup.js";
import ProductCard from "../ProductCard/ProductCard.js";
import Pagination from "react-js-pagination";
/* import HeaderVintage from "../Headers/HeaderVintage";
import HeaderNew from "../Headers/HeaderNew"; */
import "./productlist.css";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      product: null,
      activePage: 1,
      products: []
    };
  }
  async componentWillReceiveProps(newProps) {
    //console.log(newProps);
    let route = "";
    if (!newProps.location) route = "products";
    else route = newProps.location.state.route;

    console.log(route);
    try {
      let url = `http://localhost:5000/${route}`;
      console.log(url);
      const response = await fetch(url);
      const products = await response.json();
      this.setState({ products });
      //console.log(products);
    } catch (err) {
      console.log(err);
    }
    //console.log(n)
  }
  async componentDidMount() {
    try {
      let url = "";
      if (this.props.location == null) url = `http://localhost:5000/products`;
      else url = `http://localhost:5000/${this.props.location.state.route}`;
      console.log(url);
      const response = await fetch(url);
      const products = await response.json();
      this.setState({ products });
      //console.log(products);
    } catch (err) {
      console.log(err);
    }
  }
  toggle = ID => {
    // let modalNumber = "modal" + nr;
    console.log(ID);
    if (ID) {
      // console.log("here?");
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
        <div className="productList">
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
                  EditMode={this.props.EditMode}
                  deleteProduct={this.props.deleteProduct}
                />
              );
            }
          })}
        </div>
        <div
          style={{
            width: "40vw",
            backgroundColor: "rgba(255, 192, 203, 0.863)",
            height: "30px",
            float: "left",

            position: "absolute",
            top: "70vh",
            zIndex: "-1",
            boxShadow:
              "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
          }}
        ></div>
        <div
          style={{
            width: "40vw",
            backgroundColor: "rgba(255, 192, 203, 0.863)",
            height: "30px",
            float: "right",

            position: "relative",
            bottom: "35vh",
            zIndex: "-1",
            boxShadow:
              "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
          }}
        ></div>
        <Itempopup
          toggle={this.toggle}
          show={this.state.show}
          product={this.state.product}
        />
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={12}
          totalItemsCount={this.state.products.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
        <div
          style={{ width: "100vw", backgroundColor: "pink", height: "12px" }}
        ></div>
      </div>
    );
  }
}
export default ProductList;
