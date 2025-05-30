const mongoose = require('mongoose');


async function connect () {
    mongoose.connect('mongodb+srv://smit:smit@cluster0.8xgo1dl.mongodb.net/')
  .then(() => console.log('Connected!'));
}


module.exports = connect;