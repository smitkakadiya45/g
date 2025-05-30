const express = require("express");
const { inquiry, inquiryget } = require("../controller/inquiry");
const route = express.Router();



route.post("/inquiry",inquiry)
route.get("/inquiryget",inquiryget)

 

module.exports = route;