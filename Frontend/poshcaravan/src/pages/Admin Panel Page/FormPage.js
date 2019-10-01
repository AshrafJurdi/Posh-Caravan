import React, { Component } from "react";
import "./FormPage";
class FormPage extends Component {
  render() {
    return (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n* {\n  box-sizing: border-box;\n}\n\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  resize: vertical;\n}\n\nlabel {\n  padding: 12px 12px 12px 0px;\n  display: inline-block;\n}\n\ninput[type=submit], input[type=reset] {\n  background-color: #F7A597;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  float: right;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.container {\n  border-radius: 5px;\n  background-color: pink;\n  padding: 20px;\n}\n\n.col-25 {\n  float: left;\n  width: 25%;\n  margin-top: 6px;\n}\n\n.col-75 {\n  float: left;\n  width: 75%;\n  margin-top: 6px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .col-25, .col-75, input[type=submit] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n'
          }}
        />

        <div className="container">
          <form
          // onSubmit={evt =>
          //   this.onSubmit(
          //     this.state.ProductName,
          //     this.state.ProductDescription,
          //     this.state.ProductPrice,
          //     this.state.ProductImage,
          //     this.state.Sale,
          //     this.state.SalePercentage,
          //     this.state.Category_Category_ID,
          //     this.state.SubCategory_SubCategory_ID,
          //     evt
          //   )
          // }
          // onReset={() => {
          //   this.setState({
          //     ProductName: "",
          //     ProductDescription: "",
          //     ProductPrice: "",
          //     ProductImage: null,
          //     Sale: "",
          //     SalePercentage: "",
          //     Category_Category_ID: "",
          //     SubCategory_SubCategory_ID: ""
          //   });
          // }}
          >
            {/* <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Product Name</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  // placeholder="Your name.."
                />
              </div>
            </div> */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="country">Category</label>
              </div>
              <div className="col-75">
                <select id="country" name="country">
                  <option value="australia">Preloved</option>
                  <option value="canada">Everything New</option>
                  {/* <option value="usa">USA</option> */}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Product Price</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  onChange={evt =>
                    this.setState({ ProductName: evt.target.value })
                  }
                  value={this.state.ProductPrice}
                  // placeholder="Your last name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Sale</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  onChange={evt => this.setState({ Sale: evt.target.value })}
                  value={this.state.Sale}
                  // placeholder="Your last name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Sale Percentage</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  onChange={evt =>
                    this.setState({ SalePercentage: evt.target.value })
                  }
                  value={this.state.SalePercentage}
                  // placeholder="Your last name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Category_ID</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  onChange={evt =>
                    this.setState({ Category_Category_ID: evt.target.value })
                  }
                  value={this.state.Category_Category_ID}
                  // placeholder="Your last name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Sub_Category</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  onChange={evt =>
                    this.setState({
                      SubCategory_SubCategory_ID: evt.target.value
                    })
                  }
                  value={this.state.SubCategory_SubCategory_ID}
                  // placeholder="Your last name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="subject">Product Description</label>
              </div>
              <div className="col-75">
                <textarea
                  id="subject"
                  name="subject"
                  // placeholder="Write something.."
                  style={{ height: "200px" }}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Upload</label>
              </div>
              <div className="col-75">
                <input
                  type="file"
                  id="lname"
                  name="lastname"
                  onChange={evt =>
                    this.setState({ ProductImage: evt.target.files[0] })
                  }
                  // placeholder="Your last name.."
                />
              </div>
            </div>
            <div className="row">
              <input type="submit" defaultValue="Submit" />
            </div>{" "}
            <div className="row">
              <input
                type="reset"
                defaultValue="Reset"
                style={{ width: "138px" }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormPage;
