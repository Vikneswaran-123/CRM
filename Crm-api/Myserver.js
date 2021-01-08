const express = require('express')
const mongoose = require('mongoose')
const bodyparser=require('body-parser')
const cors = require('cors')


const customerapi=require('./Router/Usercontroller')
const orderapi = require('./Router/Ordercontroller')
const productapi=require('./Router/Productcontroller')


const app = express()
const port=5000
const mongodb_url="mongodb+srv://viknesdb:9677566196@cluster0.lbtod.mongodb.net/CRM?retryWrites=true&w=majority"

// mongodb connection
mongoose.connect(mongodb_url,{useNewUrlParser:true})


const db = mongoose.connection
db.on('error',()=>console.log("DB Not connected"))
db.once('open',()=>{
    console.log("DB Connected");
})

// Bodyparser (Link Router)
app.use(bodyparser.json())
app.use(cors())
app.use('/api/customer',customerapi)
app.use('/api/order',orderapi)
app.use('/api/product',productapi)








// sample get
app.get('/home',(req,res)=>{
    res.send("welcome to my page")
})

app.listen(port,()=>console.log(`server startedat port:${port}`))
