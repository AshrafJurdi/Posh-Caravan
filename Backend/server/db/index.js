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
 *
 *
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

/**
 *
 *
 */
poshcaravandb.oneUser = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM Users WHERE User_ID= ?`, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results[0]);
    });
  });
};

/**
 *
 *
 */
poshcaravandb.addUser = props => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO Users (FirstName, LastName, Email, PhoneNumber, Password) VALUES (?,?,?,?,?)`,
      [
        props.FirstName,
        props.LastName,
        props.Email,
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

/**
 *
 *
 */
poshcaravandb.deleteUser = () => {
  return new Promise((resolve, reject) => {
    pool.query(`DELETE FROM Users WHERE User_ID= ?`, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

/**
 *
 *
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

/**
 *
 *
 */

poshcaravandb.allProducts = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM Products`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

/**
 *
 *
 */

poshcaravandb.oneUser = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM Products WHERE Category_Category_ID= ?, SubCategory_SubCategory_ID=?`,
      [3, 6],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

//Below are all the controllers for querying  Categories  of Vintage & Preloved MainCategory  from Products table in the DB

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
//Below are all the controllers for querying  Sub-Categories  of Everything New MainCategory  from Products table in the DB

/**
 *
 *
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

/**
 *
 *
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

/**
 *
 *
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

/**
 *
 *
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

/**
 *
 *
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

//Below are all the controllers for querying  CRUD functions from MainCategory table in the DB

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

module.exports = poshcaravandb;
