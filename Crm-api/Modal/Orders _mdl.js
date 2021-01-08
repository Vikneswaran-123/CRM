const mongooose = require('mongoose')

const orderSchema= new mongooose.Schema({

    customer_id:String,
    product_name:String,
    quantity:String,
    price:String,
    category:String,
    address:String,
    order_date:{
        type:Date,
        default:Date.now
    }



})
const orders = mongooose.model('Orderlist',orderSchema)
module.exports = orders