const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/users", async (req, res, next) => {
  try {
    let results = await db.allUsers();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/users/:id", async (req, res, next) => {
  try {
    let results = await db.oneUser((id = req.params.id));
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

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

router.delete("/users/delete/:id", async (req, res, next) => {
  try {
    let results = await db.deleteUser((id = req.params.id));
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

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

//Below are all the routes for Vintage and Preloved

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
router.get("/everythingnew/jewelry/necklaces", async (req, res, next) => {
  try {
    let results = await db.newNecklaces();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
module.exports = router;
