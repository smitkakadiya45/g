const express = require("express");
const app = express();
const connect = require("./config/connect");
var cors = require('cors');
const route = require("./routes/inquiry")
const router = require("./routes/servicebook")
const bookplan = require("./routes/serviceplan")
connect();
app.use(express.json());



app.use("/", cors(({
    origin: 'http://localhost:3000', // frontend origin
    credentials: true
})), route)

app.use("/", cors(({
    origin: 'http://localhost:3000', // frontend origin
    credentials: true
})), router)
app.use("/", cors(({
    origin: 'http://localhost:3000', // frontend origin
    credentials: true
})), bookplan)


app.listen("1000") 