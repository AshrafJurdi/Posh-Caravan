const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
  connectionLimit: 1000,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USERNAME,
  database: "poshcaravan",
  host: "localhost",
  port: "3306"
});

let poshcaravandb = {};

//Below are all the controllers for querying  CRUD functions from Users table in the DB

/**
 * retrieves all Users from the database
 * @function allUsers
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject- function to reject the promise
 * @returns {array} the list of contacts
 */
poshcaravandb.allUsers = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM Users`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

/** retreive one user required from the database
 * @function oneUser
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject- function to reject the promise
 * @return {object} - resolves the promise by returning one user
 * */
poshcaravandb.oneUser = (email, password) => {
  return new Promise((resolve, reject) => {
    console.log("heyy", email, password);
    pool.query(
      `SELECT * FROM Users WHERE Email= ? AND Password=?`,
      [email, password],

      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results[0]);
      }
    );
  });
};

/** add one new user
 * @function addUser
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @return {object} - return results
 */
poshcaravandb.addUser = props => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO Users (FirstName, LastName, Email, UserName, Role, PhoneNumber, Password) VALUES (?,?,?,?,?,?,?)`,
      [
        props.FirstName,
        props.LastName,
        props.Email,
        props.UserName,
        props.Role,
        props.PhoneNumber,
        props.Password
      ],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** delete one user
 * @function deleteUser
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @param {object} - return results
 */
poshcaravandb.deleteUser = id => {
  return new Promise((resolve, reject) => {
    console.log(id);
    pool.query(`DELETE FROM Users WHERE User_ID=?`, [id], (err, results) => {
      console.log(results);
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

/** update one user
 * @function updateUser
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @param {object} return results
 */
poshcaravandb.updateUser = props => {
  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE Users SET FirstName=?,LastName=?,Email=?,PhoneNumber=?,Password=? WHERE User_ID=?`,
      [
        props.FirstName,
        props.LastName,
        props.Email,
        props.PhoneNumber,
        props.Password,
        props.User_ID
      ],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

//Below are all the controllers for querying  CRUD functions from Products table in the DB

/** retreive all Products from db
 * @function allProducts
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @returns {array} the list of Products
 */
poshcaravandb.allProducts = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT Products.* , Category. MainCategory_MainCategory_ID FROM Products JOIN Category where Products.Category_Category_ID = Category.Category_ID`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** retreive one required product
 * @function oneProduct
 * @param {function} resolve - id to search by
 * @param {function} reject- function to reject the promise
 * @return {object} - resolves the promise by returning one product
 */
poshcaravandb.oneProduct = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Product_ID= ?`,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      }
    );
  });
};

/** add one new product
 * @function addProduct
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @return {object} resolves the promise by adding one product
 */
poshcaravandb.addProduct = props => {
  return new Promise((resolve, reject) => {
    console.log("Sale Percentage", props.SalePercentage);
    pool.query(
      `INSERT INTO Products (ProductName, ProductDescription, ProductPrice, ProductImage,Sale,SalePercentage, Category_Category_ID, SubCategory_SubCategory_ID) VALUES (?,?,?,?,?,?,?,?)`,
      [
        props.ProductName,
        props.ProductDescription,
        props.ProductPrice,
        props.ProductImage,
        props.Sale,
        // parseFloat(props.SalePercentage) !== NaN
        //   ? parseFloat(props.SalePercentage)
        //   : 0.0,
        props.SalePercentage,
        props.Category_Category_ID,
        props.SubCategory_SubCategory_ID
      ],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** delete one product
 * @function deleteProduct
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @param {object} - return results
 */
poshcaravandb.deleteProduct = id => {
  return new Promise((resolve, reject) => {
    console.log(id);
    pool.query(
      `DELETE FROM Products WHERE Product_ID= ?`,
      id,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** update one product
 * @function updateProduct
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @returns return resutlts
 */

poshcaravandb.updateProduct = props => {
  return new Promise((resolve, reject) => {
    if (props.ProductImage) {
      pool.query(
        `UPDATE Products SET ProductName=?, ProductDescription=?, ProductPrice=?, ProductImage=?, Sale=?, SalePercentage=?, Category_Category_ID=?, SubCategory_SubCategory_ID=? WHERE Product_ID=?`,
        [
          props.ProductName,
          props.ProductDescription,
          props.ProductPrice,
          props.ProductImage,
          props.Sale,
          props.SalePercentage,
          props.Category_Category_ID,
          props.SubCategory_SubCategory_ID,
          props.Product_ID
        ],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    } else {
      pool.query(
        `UPDATE Products SET ProductName=?, ProductDescription=?, ProductPrice=?,  Sale=?, SalePercentage=?, Category_Category_ID=?, SubCategory_SubCategory_ID=? WHERE Product_ID=?`,
        [
          props.ProductName,
          props.ProductDescription,
          props.ProductPrice,
          props.Sale,
          props.SalePercentage,
          props.Category_Category_ID,
          props.SubCategory_SubCategory_ID,
          props.Product_ID
        ],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    }
  });
};

//Below are all the controllers for querying Categories of Vintage & Preloved MainCategory  from Products table in the DB

/**
 *
 *
 */
poshcaravandb.vintageNewIn = () => {
  let date = new Date();
  date = date.toISOString();
  let olddate = new Date();
  olddate.setDate(olddate.getDate() - 14);

  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT Products.* FROM Products JOIN Category WHERE Category.MainCategory_MainCategory_ID=1 AND Products.Category_Category_ID=Category.Category_ID AND DateCreated Between "${olddate}" AND "${date}" `,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
/**
 *
 *
 */
poshcaravandb.vintagePrelovedProducts = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT Products.* FROM Products JOIN Category WHERE Category.MainCategory_MainCategory_ID=1 AND Products.Category_Category_ID=Category.Category_ID`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.allHomeAccents = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=11`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */

poshcaravandb.allFurniture = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=10`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.allVintageJewelry = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=9`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.allVintageClothes = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=7`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintageBagsAndAccessories = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=8`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
//Below are all the controllers for querying  Categories  of Everything New MainCategory  from Products table in the DB

/**
 *
 *
 */
poshcaravandb.everythingNewProducts = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT Products.* FROM Products JOIN Category WHERE Category.MainCategory_MainCategory_ID=2 AND Products.Category_Category_ID=Category.Category_ID`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.saleItems = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Products.Sale="Yes"`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.allNewJewelry = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=4`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
/**
 *
 *
 */
poshcaravandb.allBagsAndAccessories = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=3`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.everythingNewNewIn = () => {
  let date = new Date();
  date = date.toISOString();
  let olddate = new Date();
  olddate.setDate(olddate.getDate() - 14);

  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT Products.* FROM Products JOIN Category WHERE Category.MainCategory_MainCategory_ID=2 AND Products.Category_Category_ID=Category.Category_ID AND DateCreated Between "${olddate}" AND "${date}" `,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.allNewFashion = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=2`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
//Below are all the controllers for querying  Sub-Categories  of Everything New MainCategory  from Products table in the DB

/** retreive all products that falls under the number 4 (Jewelry in Everything New category and the number 10 (sub category)
 * @function newNecklaces
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @returns array of object
 */
poshcaravandb.newNecklaces = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=4 AND SubCategory_SubCategory_ID=10`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** retreive all products between number 4 and 11 from the database
 * @function newBracelets
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @returns array of object
 */
poshcaravandb.newBracelets = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=4 AND SubCategory_SubCategory_ID=11`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** retreive all products between number 4 and 12 from the database
 * @function newRings
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @returns array of object
 */
poshcaravandb.newRings = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=4 AND SubCategory_SubCategory_ID=12`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** retreive all products between number 3 and 9 from the database
 * @function allBags
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @returns array of object
 */

poshcaravandb.allBags = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=3 AND SubCategory_SubCategory_ID=6`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** retreive all products between number 4 and 13 from the database
 * @function newOtherJewelry
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @returns array of object
 */
poshcaravandb.newOtherJewelry = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=4 AND SubCategory_SubCategory_ID=13`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** retreive all products between number 3 and 7 from the database
 * @function allshoes
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @returns array of object
 */
poshcaravandb.allshoes = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=3 AND SubCategory_SubCategory_ID=7`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
/**
 *
 *
 */
poshcaravandb.newJackets = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=2 AND SubCategory_SubCategory_ID=1`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.allNewSmalLeatherGoods = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=3 AND SubCategory_SubCategory_ID=8`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.newDresses = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=2 AND SubCategory_SubCategory_ID=2`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.allNewOtherAccessories = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=3 AND SubCategory_SubCategory_ID=9`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.newSkirts = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=2 AND SubCategory_SubCategory_ID=3`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.newPants = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=2 AND SubCategory_SubCategory_ID=4`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.newTops = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=2 AND SubCategory_SubCategory_ID=5`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

//Below are all the controllers for querying  Sub-Categories  of Vintage & Preloved MainCategory  from Products table in the DB

/**
 *
 *
 */
poshcaravandb.vintageNecklaces = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=9 AND SubCategory_SubCategory_ID=10`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintageBracelets = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=9 AND SubCategory_SubCategory_ID=11`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintageRings = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=9 AND SubCategory_SubCategory_ID=12`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintageOtherJewelry = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=9 AND SubCategory_SubCategory_ID=13`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintageJackets = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=7 AND SubCategory_SubCategory_ID=1`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintageDresses = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=7 AND SubCategory_SubCategory_ID=2`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintageSkirts = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=7 AND SubCategory_SubCategory_ID=3`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintagePants = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=7 AND SubCategory_SubCategory_ID=4`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintageTops = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=7 AND SubCategory_SubCategory_ID=5`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintageBags = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=8 AND SubCategory_SubCategory_ID=6`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vinatgeShoes = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=8 AND SubCategory_SubCategory_ID=7`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintageSmalLeatherGoods = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=8 AND SubCategory_SubCategory_ID=8`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintageOtherAccessories = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID=8 AND SubCategory_SubCategory_ID=9`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

//Below are all the controllers for querying  CRUD functions from Category table in the DB

/**
 *
 *
 */
poshcaravandb.everythingNewCategories = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT CategoryName,CategoryImage FROM Category WHERE MainCategory_MainCategory_ID=2`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.vintageCategories = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT CategoryName,CategoryImage FROM Category WHERE MainCategory_MainCategory_ID=1`,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

//Below are all the controllers for querying Main Categories, Categories, and Sub-Categories

/** add one new category
 * @function addCategory
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @return {object} resolves the promise by adding one category
 */
poshcaravandb.addCategory = props => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO Category (CategoryName, CategoryImage, MainCategory_MainCategory_ID) VALUES (?,?,?)`,
      [
        props.CategoryName,
        props.CategoryImage,
        props.MainCategory_MainCategory_ID
      ],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** add one new subcategory
 * @function addSubCategory
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @return {object} resolves the promise by adding one subcategory
 */
poshcaravandb.addSubCategory = props => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO SubCategory (SubCategoryName) VALUES (?)`,
      [props.SubCategoryName],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.mainCategories = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM MainCategory `,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/**
 *
 *
 */
poshcaravandb.categories = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Category `,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** delete one Category
 * @function deleteCategory
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @param {object} - return results
 */
poshcaravandb.deleteCategory = id => {
  return new Promise((resolve, reject) => {
    console.log(id);
    pool.query(
      `DELETE FROM Category WHERE Category_ID= ?`,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** update one category
 * @function updateCategory
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @returns return resutlts
 */

poshcaravandb.updateCategory = props => {
  return new Promise((resolve, reject) => {
    console.log("it reached here", props);
    if (props.CategoryImage) {
      pool.query(
        `UPDATE Category SET 
        CategoryName=?,
        CategoryImage=?,
        MainCategory_MainCategory_ID=? WHERE Category_ID=?`,
        [
          props.CategoryName,
          props.CategoryImage,
          props.MainCategory_MainCategory_ID,
          props.Category_ID
        ],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    } else {
      pool.query(
        `UPDATE Category SET  CategoryName=?, MainCategory_MainCategory_ID=? WHERE Category_ID=?`,
        [
          props.CategoryName,
          props.MainCategory_MainCategory_ID,
          props.Category_ID
        ],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    }
  });
};

/**
 *
 *
 */
poshcaravandb.subCategories = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM SubCategory `,

      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

/** delete one subcategory
 * @function deleteSubCategory
 * @param {function} resolve - function to resolve the promise
 * @param {function} reject - function to reject the promise
 * @param {object} - return results
 */
poshcaravandb.deleteSubCategory = id => {
  return new Promise((resolve, reject) => {
    console.log(id);
    pool.query(
      `DELETE FROM SubCategory WHERE SubCategory_ID= ?`,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

poshcaravandb.updateSubcategory = props => {
  return new Promise((resolve, reject) => {
    console.log("test", props);
    pool.query(
      `UPDATE SubCategory SET SubCategoryName=? WHERE SubCategory_ID=?`,
      [props.SubCategoryName, props.SubCategory_ID],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
module.exports = poshcaravandb;
