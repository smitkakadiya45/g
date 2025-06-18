const express = require("express");
const app = express();
const connect = require("./config/connect");
var cors = require('cors');
const route = require("./routes/inquiry")
const router = require("./routes/servicebook")
const bookplan = require("./routes/serviceplan")
connect();
app.use(express.json());
const path = require('path');

// app.use(express.static(path.join(__dirname, 'demo/build')));


 
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'demo/build', 'index.html'));
// });

app.use("/", cors(({
    origin: '*', // frontend origin
    credentials: true
})), route)

app.use("/", cors(({
    origin: '*', // frontend origin
    credentials: true
})), router)
app.use("/", cors(({
    origin: '*', // frontend origin
    credentials: true
})), bookplan)


app.listen("5000") 