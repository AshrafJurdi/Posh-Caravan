import React from "react";
import Itempopup from "../Itempopup/Itempopup.js";
import ProductCard from "../ProductCard/ProductCard.js";
import Pagination from "react-js-pagination";
import "./productlist.css";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      product: null,
      activePage: 1,
      products: [
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "White Tanktop",
          Description: "100% Certified Fair Trade Cotton Made in USA or Imported Machine Wash Six (6) Pack Boys Sleeveless Tank Top Shirts Colors: Assorted Pastels 6 Per Pack Sizes: NB, S, M, L",
          Price: "Price: 22$",
          ID: 1
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajshfd 2",
          Description: "gsjdhg",
          Price: "22",
          ID: 2
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jha as  as 3 ",
          Description: "gsjdhg",
          Price: "22",
          ID: 3
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajsh   fd 4",
          Description: "gsjdhg",
          Price: "22",
          ID: 4
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jh   ajshfd 5",
          Description: "gsjdhg",
          Price: "22",
          ID: 5
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajs  hfd 6",
          Description: "gsjdhg",
          Price: "22",
          ID: 6
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajsh   fd 7",
          Description: "gsjdhg",
          Price: "22",
          ID: 7
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajshfd 8",
          Description: "gsjdhg",
          Price: "22",
          ID: 8
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajshfd 1",
          Description: "gsjdhg",
          Price: "22",
          ID: 9
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajshfd 2",
          Description: "gsjdhg",
          Price: "22",
          ID: 10
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jha as  as 3 ",
          Description: "gsjdhg",
          Price: "22",
          ID: 11
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajsh   fd 4",
          Description: "gsjdhg",
          Price: "22",
          ID: 12
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jh   ajshfd 5",
          Description: "gsjdhg",
          Price: "22",
          ID: 13
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajs  hfd 6",
          Description: "gsjdhg",
          Price: "22",
          ID: 14
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajsh   fd 7",
          Description: "gsjdhg",
          Price: "22",
          ID: 15
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajshfd 8",
          Description: "gsjdhg",
          Price: "22",
          ID: 16
        }
      ]
    };
  }

  toggle = ID => {
    // let modalNumber = "modal" + nr;
    console.log(ID);
    if (ID) {
      console.log("here?");
      const product = this.state.products.find(product => product.ID === ID);
      this.setState({ product });
    }
    this.setState({
      show: !this.state.show
    });
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
              return <ProductCard toggle={this.toggle} product={product} />;
            }
          })}
        </div>
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
      </div>
    );
  }
}

export default ProductList;
