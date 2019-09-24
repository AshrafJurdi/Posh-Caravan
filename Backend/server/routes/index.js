const express = require("express");
const db = require("../db");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const multerStorage = multer.diskStorage({
  destination: path.join(__dirname, "../Public/Images"),
  filename: (req, file, cb) => {
    const { fieldname, originalname } = file;
    const date = Date.now();
    const filename = `${fieldname}-${date}-${originalname}`;
    cb(null, filename);
  }
});
const upload = multer({ storage: multerStorage });

//Below are all the CRUD routes for the Users table
/**
 *
 *
 */
router.get("/users", async (req, res, next) => {
  try {
    let results = await db.allUsers();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 *
 */
router.get("/users/:id", async (req, res, next) => {
  try {
    let results = await db.oneUser((id = req.params.id));
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 *
 */
router.post("/user/create", async (req, res, next) => {
  try {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    const Password = req.body.Password;
    let results = await db.addUser({
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      Password
    });
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 *
 */
router.delete("/users/delete/:id", async (req, res, next) => {
  try {
    let results = await db.deleteUser((id = req.params.id));
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 *
 */
router.put("/user/update/:id", async (req, res, next) => {
  try {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    const Password = req.body.Password;
    const User_ID = req.params.id;
    let results = await db.updateUser({
      User_ID,
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      Password
    });
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Below are all the routes to get data from Vintage and Preloved Categories

/**
 *
 */
router.get("/vintage&preloved/products/homeaccents", async (req, res, next) => {
  try {
    let results = await db.allHomeAccents();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintage&preloved/products/furniture", async (req, res, next) => {
  try {
    let results = await db.allFurniture();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Below are all the routes get data from Everything New Categories

/**
 *
 */
router.get("/everythingnew/allproducts", async (req, res, next) => {
  try {
    let results = await db.everythingNewProducts();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/everythingnew/sale", async (req, res, next) => {
  try {
    let results = await db.saleItems();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/everythingnew/jewelry", async (req, res, next) => {
  try {
    let results = await db.allNewJewelry();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
/**
 *
 */
router.get("/everythingnew/bagsandaccessories", async (req, res, next) => {
  try {
    let results = await db.allBagsAndAccessories();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
//Below are all the routes get data from Everything New  Sub-Categories

/**
 *
 */
router.get("/everythingnew/jewelry/necklaces", async (req, res, next) => {
  try {
    let results = await db.newNecklaces();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/everythingnew/jewelry/bracelets", async (req, res, next) => {
  try {
    let results = await db.newBracelets();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/everythingnew/jewelry/rings", async (req, res, next) => {
  try {
    let results = await db.newRings();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get(
  "/everythingnew/bagsandaccessories/otheraccessories",
  async (req, res, next) => {
    try {
      let results = await db.allNewOtherAccessories();
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
);

/**
 *
 */
router.get(
  "/everythingnew/bagsandaccessories/smallleathergoods",
  async (req, res, next) => {
    try {
      let results = await db.allNewSmalLeatherGoods();
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
);

/**
 *
 */
router.get(
  "/everythingnew/bagsandaccessories/shoes",
  async (req, res, next) => {
    try {
      let results = await db.allshoes();
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
);

//Below are all the routes for querying  CRUD functions from Category table in the DB

/**
 *
 */
router.get("/everythingnew/categories", async (req, res, next) => {
  try {
    let results = await db.everythingNewCategories();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintage/categories", async (req, res, next) => {
  try {
    let results = await db.vintageCategories();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Below are all the routes for querying  CRUD functions from MainCategory table in the DB

/**
 *
 */
router.get("/maincategory", async (req, res, next) => {
  try {
    let results = await db.mainCategories();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
module.exports = router;
