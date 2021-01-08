const mongoose= require('mongoose')


const productSchema = new mongoose.Schema({
    product_id:String,
    product_type:String,
    product_name:String,
    product_price:String,
    product_brand:String,
    addedon:{
        type:Date,
        default:Date.now   
    }


})
const products =mongoose.model('Productlist',productSchema)
module.exports = products
