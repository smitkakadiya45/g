const mongoose = require('mongoose');
const Schema = mongoose.Schema



const schema = new Schema({
    email: ({
        type: String,
        require
    }),
    name: ({
        type: String,
        require
    }),
    serviceplan: ({
        type: String
    }),
    date: ({
        type: String,
        require
    }),
    number: ({
        type: String,
        require
    }),
    time: ({
        type: String,
        require
    }),
    price: ({
        type: String
    })
})



const MyModel2 = mongoose.model("service plan book", schema)


module.exports = MyModel2;