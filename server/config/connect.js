const mongoose = require('mongoose');


async function connect () {
    mongoose.connect('mongodb://localhost:27017/garage')
  .then(() => console.log('Connected!'));
}


module.exports = connect;