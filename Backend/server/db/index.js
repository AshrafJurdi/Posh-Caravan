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
      [3, 3],
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
