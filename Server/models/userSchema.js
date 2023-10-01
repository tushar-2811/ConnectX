import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     name : String,

     email : {
        type : String,
        unique : true,
        required : true
     },

     phoneNo : {
        type : String,
        unique : true
     },

     userName : {
        type : String,
        unique : true,
        required : true
     },

     password : {
        type : String,
        required : true
     },

     yearOfBirth: {
        type : Number,
        requires : true
     }

},{timestamps : true})

const User = mongoose.model("User" , userSchema);

export default User;
