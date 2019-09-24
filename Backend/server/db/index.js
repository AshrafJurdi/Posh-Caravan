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
