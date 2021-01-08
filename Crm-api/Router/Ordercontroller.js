const express = require('express')
const mongoose = require('mongoose')
const orderroute = express.Router()
const Orders_mdl = require('../Modal/Orders _mdl')

// For Placing Orders:

orderroute.post('/placeOrder',(req,res)=>{
        console.log("data:",req.body);
        Orders_mdl.insertMany(req.body,(err,result)=>{
            if(err){
                res.send("Error in placing order")
            }
            else{
                res.send("Order placed Sucessfully")
            }
        })
})

// For Getting Placed Orders From Db:

orderroute.get('/getOrders',(req,res)=>{
        Orders_mdl.find((err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }       

        })

})

// TO delete Orders From DB:




module.exports=orderroute