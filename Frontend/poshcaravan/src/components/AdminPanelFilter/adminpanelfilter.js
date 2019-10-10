import React from "react";
import { MDBInput, MDBFormInline } from "mdbreact";

class AdminFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      maincategories: [],
      categories: [],
      Subcategories: []
    };
  }

  async componentDidMount() {
    try {
      const responseCategories = await fetch(
        `${process.env.REACT_APP_APP_URL}/categories`
      );
      const responseSubcategories = await fetch(
        `${process.env.REACT_APP_APP_URL}/subcategories`
      );
      const responseMaincategories = await fetch(
        `${process.env.REACT_APP_APP_URL}/maincategories`
      );
      const categories = await responseCategories.json();
      const Subcategories = await responseSubcategories.json();
      const maincategories = await responseMaincategories.json();
      this.setState({ categories, Subcategories, maincategories });
      console.log("Categories==>", categories);
      console.log("Sub Categories==>", Subcategories);
      console.log("MainCategories==>", maincategories);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <div
          className="Filter-Container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "5px 0",
            justifyContent: "center"
          }}
        >
          <label>
            Main Category
            <select
              className="browser-default custom-select"
              value={this.state.maincategories.MainCategory_ID}
              name="MainCategory_ID"
              onChange={event => {
                this.props.handleMainCategory(event.target.value);
                console.log("event-main", event.target.value);
              }}
            >
              <option value={0}>All</option>
              {this.state.maincategories.map((MainCategory, index) => {
                return (
                  <option key={index} value={MainCategory.MainCategory_ID}>
                    {MainCategory.MainCategoryName}
                  </option>
                );
              })}
            </select>
          </label>
          <br />
          <br />
          <label>
            Category
            <select
              className="browser-default custom-select"
              value={this.state.categories.Category_ID}
              name="Category_ID"
              onChange={event => {
                this.props.handleCategory(event.target.value);
                console.log("event-cat", event.target.value);
              }}
            >
              <option value={0}>All</option>
              {this.props.mainCategory != 0
                ? this.props.mainCategory == 1
                  ? this.state.categories.map(category => {
                      if (category.MainCategory_MainCategory_ID === 1) {
                        return (
                          <option value={category.Category_ID}>
                            {category.CategoryName}
                          </option>
                        );
                      }
                    })
                  : this.state.categories.map(category => {
                      if (category.MainCategory_MainCategory_ID === 2) {
                        return (
                          <option value={category.Category_ID}>
                            {category.CategoryName}
                          </option>
                        );
                      }
                    })
                : null}
            </select>
          </label>
          <br />
          <br />
          <label>
            Sub-Category
            <select
              className="browser-default custom-select"
              name="SubCategory_SubCategory_ID"
              value={this.state.Subcategories.SubCategory_ID}
              onChange={event => {
                this.props.handleSubCategory(event.target.value);
                console.log("event-sub", event.target.value);
              }}
            >
              <option value={0}>All</option>
              {this.props.category != 0
                ? this.state.Subcategories.map(subcategory => {
                    return (
                      <option value={subcategory.SubCategory_ID}>
                        {subcategory.SubCategoryName}
                      </option>
                    );
                  })
                : null}
            </select>
          </label>
        </div>
      </div>
    );
  }
}

export default AdminFilter;
