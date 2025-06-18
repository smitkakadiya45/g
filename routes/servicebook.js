const express = require("express");
const {servicebook, servicebookget, servicebookdelete } = require("../controller/servicebook");
const route = express.Router();



route.post("/servicebook",servicebook)
route.get("/servicebookget",servicebookget)
route.delete("/servicebookdelete",servicebookdelete)

 

module.exports = route;