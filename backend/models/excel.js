import mongoose from "mongoose"

const excelSchema=new mongoose.Schema({
    NoticeId:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Account:{
        type:String,
        required:true
    },                                               
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    // userId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"User",
    //     required:true
    // }
},{timestamps:true});

const Excel=new mongoose.model("Excel",excelSchema)

export default Excel

