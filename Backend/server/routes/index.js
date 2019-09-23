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
    // filename will be: image-1345923023436343-filename.png
    const filename = `${fieldname}-${date}-${originalname}`;
    cb(null, filename);
  }
});
const upload = multer({ storage: multerStorage });

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

module.exports = router;
