const express = require("express");
const apiRouter = require("./routes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", apiRouter);

app.listen(process.env.PORT || "5000", () => {
  console.log(`Server is  running on port: ${process.env.PORt || "5000"}`);
});
