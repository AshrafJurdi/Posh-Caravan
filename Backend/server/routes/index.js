const express = require("express");
const db = require("../db");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const nodemailer = require("nodemailer");

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

//Below Mail message and recieve

router.post("/contact", (req, res) => {
  console.log("=====", req.body);
  const transport = {
    service: "gmail",
    auth: {
      user: "sportswear96@gmail.com",
      pass: "sportswear123"
    }
  };

  const transporter = nodemailer.createTransport(transport);

  const option = {
    from: ``,
    to: "mayadihny@gmail.com",
    subject: ``,
    html: `<h3> message Contact </h3>
               <ul>
                    <li>Name : </li>
                    <li>Email : ${req.body.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>`
  };
  transporter.sendMail(option, (err, info) => {
    err ? console.log(err) : console.log("Email has sent....");
  });
});
//Below are all the CRUD routes for the Users table
/**
 * Route that
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

//Below are all the CRUD routes for the Products table
/**
 *
 *
 */
router.get("/products", async (req, res, next) => {
  try {
    let results = await db.allProducts();
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
router.get("/products/:id", async (req, res, next) => {
  try {
    let results = await db.oneProduct((id = req.params.id));
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.post(
  "/product/create",
  upload.single("ProductImage"),
  async (req, res, next) => {
    try {
      const ProductName = req.body.ProductName;
      const ProductDescription = req.body.ProductDescription;
      const ProductPrice = req.body.ProductPrice;
      const ProductImage = req.file.filename;
      const Sale = req.body.Sale;
      const SalePercentage = req.body.SalePercentage;
      const Category_Category_ID = req.body.Category_Category_ID;
      const SubCategory_SubCategory_ID = req.body.SubCategory_SubCategory_ID;
      console.log(req.body);
      let results = await db.addProduct({
        ProductName,
        ProductDescription,
        ProductPrice,
        ProductImage,
        Sale,
        SalePercentage,
        Category_Category_ID,
        SubCategory_SubCategory_ID
      });
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
);

/**
 *
 *
 */
router.get("/products/delete/:id", async (req, res, next) => {
  try {
    console.log("id", req.params.id);
    let results = await db.deleteProduct(req.params.id);
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
router.put(
  "/products/update/:id",
  upload.single("ProductImage"),
  async (req, res, next) => {
    if (req.file) {
      try {
        const ProductName = req.body.ProductName;
        const ProductDescription = req.body.ProductDescription;
        const ProductPrice = req.body.ProductPrice;
        const ProductImage = req.file.filename;
        const Sale = req.body.Sale;
        const SalePercentage = req.body.SalePercentage;
        const Category_Category_ID = req.body.Category_Category_ID;
        const SubCategory_SubCategory_ID = req.body.SubCategory_SubCategory_ID;
        const Product_ID = req.params.id;
        let results = await db.updateProduct({
          Product_ID,
          ProductName,
          ProductDescription,
          ProductPrice,
          ProductImage,
          Sale,
          SalePercentage,
          Category_Category_ID,
          SubCategory_SubCategory_ID
        });
        res.json(results);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    } else {
      try {
        const ProductName = req.body.ProductName;
        const ProductDescription = req.body.ProductDescription;
        const ProductPrice = req.body.ProductPrice;
        const Sale = req.body.Sale;
        const SalePercentage = req.body.SalePercentage;
        const Category_Category_ID = req.body.Category_Category_ID;
        const SubCategory_SubCategory_ID = req.body.SubCategory_SubCategory_ID;
        const Product_ID = req.params.id;
        let results = await db.updateProduct({
          Product_ID,
          ProductName,
          ProductDescription,
          ProductPrice,
          Sale,
          SalePercentage,
          Category_Category_ID,
          SubCategory_SubCategory_ID
        });
        res.json(results);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    }
  }
);

//Below are all the routes to get data from Vintage and Preloved Categories

/**
 *
 */
router.get("/vintage&preloved/newin", async (req, res, next) => {
  try {
    let results = await db.vintageNewIn();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintagepreloved/allproducts", async (req, res, next) => {
  try {
    let results = await db.vintagePrelovedProducts();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

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
router.get("/vintage&preloved/products/jewelry", async (req, res, next) => {
  try {
    let results = await db.allVintageJewelry();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintage&preloved/clothes", async (req, res, next) => {
  try {
    let results = await db.allVintageClothes();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintage&preloved/bagsandaccessories", async (req, res, next) => {
  try {
    let results = await db.vintageBagsAndAccessories();
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

/**
 *
 */
router.get("/everythingnew/newin", async (req, res, next) => {
  try {
    let results = await db.everythingNewNewIn();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/everythingnew/fashion", async (req, res, next) => {
  try {
    let results = await db.allNewFashion();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
//Below are all the routes get data from Vintage & Preloved Sub-Categories

/**
 *
 */
router.get("/vintage&preloved/jewelry/necklaces", async (req, res, next) => {
  try {
    let results = await db.vintageNecklaces();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintage&preloved/jewelry/bracelets", async (req, res, next) => {
  try {
    let results = await db.vintageBracelets();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintage&preloved/jewelry/rings", async (req, res, next) => {
  try {
    let results = await db.vintageRings();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintage&preloved/jewelry/otherjewelry", async (req, res, next) => {
  try {
    let results = await db.vintageOtherJewelry();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintage&preloved/clothes/jackets", async (req, res, next) => {
  try {
    let results = await db.vintageJackets();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintage&preloved/clothes/dresses", async (req, res, next) => {
  try {
    let results = await db.vintageDresses();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintage&preloved/clothes/skirts", async (req, res, next) => {
  try {
    let results = await db.vintageSkirts();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintage&preloved/clothes/pants", async (req, res, next) => {
  try {
    let results = await db.vintageSkirts();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/vintage&preloved/clothes/tops", async (req, res, next) => {
  try {
    let results = await db.vintageTops();
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
  "/vintage&preloved/bagsandaccessories/otheraccessories",
  async (req, res, next) => {
    try {
      let results = await db.vintageOtherAccessories();
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
  "/vintage&preloved/bagsandaccessories/smallleathergoods",
  async (req, res, next) => {
    try {
      let results = await db.vintageSmalLeatherGoods();
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
  "/vintage&preloved/bagsandaccessories/shoes",
  async (req, res, next) => {
    try {
      let results = await db.vintageShoes();
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
  "/vintage&preloved/bagsandaccessories/bags",
  async (req, res, next) => {
    try {
      let results = await db.vintageBags();
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
);

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
router.get("/everythingnew/jewelry/otherjewelry", async (req, res, next) => {
  try {
    let results = await db.newOtherJewelry();
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
router.get("/everythingnew/bagsandaccessories/bags", async (req, res, next) => {
  try {
    let results = await db.allBags();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
router.get("/everythingnew/fashion/jackets", async (req, res, next) => {
  try {
    let results = await db.newJackets();
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
router.get("/everythingnew/fashion/dresses", async (req, res, next) => {
  try {
    let results = await db.newDresses();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/everythingnew/fashion/skirts", async (req, res, next) => {
  try {
    let results = await db.newSkirts();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/everythingnew/fashion/pants", async (req, res, next) => {
  try {
    let results = await db.newPants();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/everythingnew/fashion/tops", async (req, res, next) => {
  try {
    let results = await db.newTops();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

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

//Below are all the routes for querying  Main Categories, Categories, and Sub-Categories

/**
 *
 */
router.get("/maincategories", async (req, res, next) => {
  try {
    let results = await db.mainCategories();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/categories", async (req, res, next) => {
  try {
    let results = await db.categories();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 *
 */
router.get("/subcategories", async (req, res, next) => {
  try {
    let results = await db.subCategories();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
module.exports = router;
