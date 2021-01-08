const { Mongoose } = require("mongoose");

const express = require('express')
const mongoose= require('mongoose')
const customroute = express.Router()
const customer_mdl= require('../Modal/Customer_mdl')


// To Register Products:

customroute.post('/newCustomer',(req,res)=>{
        console.log(req.body);
        customer_mdl.findOne({email:req.body.email},(err,result)=>{
            if(err){
               res.send(err)
            }else{
                console.log(result);
                if(result!=null){
                    res.send("email already exist")
                }else{
                    customer_mdl.insertMany(req.body,(err,result)=>{
                        if(err){
                            res.send("User not registered")
                        }else{
                            res.send("Resgistered Sucessfully")
                        }
                    })
                }
            }      
        })
})


// TO get customer deatil from DB:

customroute.get('/getCustomer',(req,res)=>{
        customer_mdl.find((err,result)=>{
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
})

//TO delelte Customer Detail From Db:

customroute.delete('/deleteUser/:id',(req,res)=>{
        customer_mdl.remove({_id:req.params.id},(err,result)=>{
            if(err){
                res.send("User Not Removed")
            }
            else{
                if(result.deleteCount==0){
                    res.send("User Not Available")
                }
                else{
                    res.send("User Is Removed Sucessfully")
                }
            }
        
        })
})





module.exports=customroute