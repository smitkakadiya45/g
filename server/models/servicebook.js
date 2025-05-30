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
    service: ({
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
    notes: ({
        type: String
    })
})



const MyModel1 = mongoose.model("service booking", schema)


module.exports = MyModel1;