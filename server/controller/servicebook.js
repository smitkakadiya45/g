const MyModel1 = require("../models/servicebook")




async function servicebook(req,res) {

 
    try {
        const data = await MyModel1.create(req.body) 
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
async function servicebookget(req,res) {

 
    try {
        const data = await MyModel1.find() 
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

module.exports = {servicebook, servicebookget}