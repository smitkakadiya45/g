const MyModel = require("../models/inquiry")


 

async function inquiry(req,res) {


    try {
        const data = await MyModel.create(req.body) 
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

async function inquiryget(req,res) {


    try {
        const data = await MyModel.find() 
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
async function inquirydelete(req,res) {


    try {
        const data = await MyModel.findByIdAndDelete(req.body) 
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

module.exports = {inquiry , inquiryget, inquirydelete}