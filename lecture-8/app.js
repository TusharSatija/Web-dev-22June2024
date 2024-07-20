const express=require('express');
const app=express();
const path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));


app.get('/home',(req,res)=>{
    res.render('index');
    // res.send('this is a home page .');
})

app.post('/submit',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.get('/about',(req,res)=>{
    res.send('this is a about page');
})

app.get('/products',(req,res)=>{
    res.send('this is a product page');
})



app.listen(3333,()=>{
    console.log("server is running at port 3333");
})