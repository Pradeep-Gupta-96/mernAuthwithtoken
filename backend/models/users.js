import mongoose from "mongoose"

// const opts = {
//     // Make Mongoose use Unix time (seconds since Jan 1, 1970)
//     timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
//   };
  

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
},{timestamps:true});

const User=new mongoose.model("User",userSchema)

export default User