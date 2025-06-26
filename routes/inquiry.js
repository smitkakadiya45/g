const express = require("express");
const { inquiry, inquiryget, inquirydelete } = require("../controller/inquiry");
const route = express.Router();



route.post("/inquiry",inquiry)
route.get("/inquiryget",inquiryget)
route.post("/inquirydelete",inquirydelete)

 

module.exports = route;