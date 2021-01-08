const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    city:String,
    address:String,
    password:String,
    state:String,
    regison:{

        type:Date,
        default:Date.now

    }
})

const user =mongoose.model('Customlist',userSchema)
module.exports=user