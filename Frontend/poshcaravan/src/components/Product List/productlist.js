import React from "react";
import { MDBCard, MDBCardImage, MDBIcon } from "mdbreact";
import Pagination from "react-js-pagination";
import "./productlist.css";
class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: 1,
      products: [
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajshfd 1",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajshfd 2",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jha as  as 3 ",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajsh   fd 4",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jh   ajshfd 5",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajs  hfd 6",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajsh   fd 7",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajshfd 8",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajshfd 1",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajshfd 2",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jha as  as 3 ",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajsh   fd 4",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jh   ajshfd 5",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajs  hfd 6",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajsh   fd 7",
          Description: "gsjdhg",
          Price: "22"
        },
        {
          Picture:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg",
          Title: "jhajshfd 8",
          Description: "gsjdhg",
          Price: "22"
        }
      ]
    };
  }

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
                <div className="Card1">
                  <MDBCard
                    className="mx-4"
                    style={{ width: "15rem" }}
                    collection
                  >
                    <MDBCardImage
                      className="img-fluid"
                      zoom
                      src={product.Picture}
                    />
                    <div className="stripe dark">
                      <a href="#!">
                        <p>
                          {product.Title}
                          <MDBIcon icon="chevron-right" />
                        </p>
                      </a>
                    </div>
                  </MDBCard>
                </div>
              );
            }
          })}
        </div>
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
