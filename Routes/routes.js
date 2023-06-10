const express=require('express');
const route=express.Router();
const task=require('../Schema/todoschema');

route.get('/',async(req,res)=>{
const item=await task.find();
// console.log(tasks.length);
    res.render('home',{item});
})
route.get('/add',(req,res)=>{
    res.render("form");
})
route.post('/addtask',async(req,res)=>{
    const value=req.body.task;
    // console.log(value);
    const temp=new task({task:value});
    await temp.save();
    res.redirect('/');
})
route.get('/delete/:id',async(req,res)=>{
    const{id}=req.params;
await task.findByIdAndDelete(id);
    // console.log(id);
    res.redirect("/");
})
module.exports =route;