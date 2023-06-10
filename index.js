const express=require('express');
const app=express();
const path=require('path');
app.set('view engine','ejs');
app.use(express.static('public'));
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Todo')
const task=require('./Schema/todoschema');
const router=require('./Routes/routes');
app.use(express.urlencoded());
app.use('/',router);
app.listen('2323',()=>{
    console.log('server listening at port 2323');
})

