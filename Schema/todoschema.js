const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    task:
    {
        type:String,
        trim:true,
    },

})
const task=mongoose.model('task',schema);
module.exports=task;