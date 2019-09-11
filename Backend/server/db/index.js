const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 1000,
  password: "wicmKUPw0FD1OODA",
  user: "debian-sys-maint",
  database: "poshcaravan",
  host: "localhost",
  port: "3306"
});

let poshcaravandb = {};

poshcaravandb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM users`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

poshcaravandb.one = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM users WHERE id= ?`, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results[0]);
    });
  });
};
module.exports = poshcaravandb;
