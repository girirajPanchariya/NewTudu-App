import mongoose from "mongoose";

const Todoschema =  new mongoose.Schema({
    title:{
            type:String,
            required:true
    },
    subject:{
            type:String,
            required:true
            
    },
    description:{
            type:String,
            required:true
    },
},{timestamps:true})

export const TudoModel = mongoose.model('TodoModel',Todoschema)