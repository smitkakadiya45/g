const express = require("express");
const { serviceplan, serviceplanget, serviceplandelete } = require("../controller/serviceplan");
const route = express.Router();



route.post("/serviceplan",serviceplan)
route.get("/serviceplanget",serviceplanget)
route.post("/serviceplandelete",serviceplandelete)

 

module.exports = route;