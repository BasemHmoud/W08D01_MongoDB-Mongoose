const mongoose=require("mongoose");

const todoSchema=new mongoose({
   task:{type :string} ,
   description:{type :string} ,
   deadline:{type :Date} ,
   isCompleted:{type :Boolean} ,
   priority:{type :string} 
})
module.exports=mongoose.model("Todo",todoSchema)