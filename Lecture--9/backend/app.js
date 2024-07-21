const express=require('express');
const app=express();
const seedFood=require('./seed');
// const Food=require('/models/Food');
const { default: mongoose } = require('mongoose');
const cors=require('cors');

app.use(cors());

( async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/food-app-db');
    console.log('db is connected');
    await seedFood;
})()


app.get('/foods',(req,res)=>{
    res.send("food route");
})

app.listen(7000,()=>{
    console.log("app is running at port 8080")
})