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
    subject: ({
        type: String,
        require
    }),
    number: ({
        type: String,
        require
    }),
    massage: ({
        type: String,
        require
    })
})



const MyModel = mongoose.model("inquiry", schema)


module.exports = MyModel;