const express = require ('express')
const mongoose = require('mongoose')
const productroute = express.Router()
const Products_mdl = require('../Modal/Product_mdl')


// For Adding Products:
productroute.post('/addProduct',(req,res)=>{
    console.log("data:",req.body);
    Products_mdl.insertMany(req.body,(err,result)=>{
        if(err){
            res.send("Error in adding Products")
        }
        else{
            res.send("Products Added Sucessfully")
        }

    })

    
})

// For Getting Orders From Db:

productroute.get('/getProducts',(req,res)=>{
    Products_mdl.find((err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})

// For delete Products From DB:




module.exports=productroute