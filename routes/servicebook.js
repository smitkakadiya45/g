const express = require("express");
const {servicebook, servicebookget } = require("../controller/servicebook");
const route = express.Router();



route.post("/servicebook",servicebook)
route.get("/servicebookget",servicebookget)

 

module.exports = route;