const mongoose = require('mongoose');


async function connect () {
    mongoose.connect('mongodb+srv://geetakakadiya299:DGRbdWD06pthUmQW@cluster0.u4low62.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));
}


module.exports = connect;