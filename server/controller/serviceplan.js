const MyModel2 = require("../models/serviceplan")




async function serviceplan(req,res) {


    try {
        const data = await MyModel2.create(req.body) 
        res.status(200).json({
            status: "seccess",
            message: "data insert",
        })
    } catch (err) {
        res.status(400).json({
            status: "false",
            err
        })
    }
}



async function serviceplanget(req,res) {


    try {
        const data = await MyModel2.find() 
        res.status(200).json({
            status: "seccess",
            message: "data find",
            data
        })
    } catch (err) {
        res.status(400).json({
            status: "false",
            err
        })
    }
}


async function serviceplandelete(req,res) {


    try {
        const data = await MyModel2.findByIdAndDelete(req.body) 
        res.status(200).json({
            status: "seccess",
            message: "data deleted",
            data
        })
    } catch (err) {
        res.status(400).json({
            status: "false",
            err
        })
    }
}

module.exports = {serviceplan, serviceplanget, serviceplandelete}