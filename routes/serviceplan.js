const express = require("express");
const { serviceplan, serviceplanget } = require("../controller/serviceplan");
const route = express.Router();



route.post("/serviceplan",serviceplan)
route.get("/serviceplanget",serviceplanget)

 

module.exports = route;