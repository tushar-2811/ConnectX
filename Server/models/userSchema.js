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
        required : true
     },

     inRelationship : {
      type : Boolean
     },

     gender : {
      type : String
     },

     college : {
      type : String
     },

     course : {
      type : String
     },

     bodyCount : {
      type : Number
     },

     height : {
      type : Number
     },

     isSmoker : {
      type : Boolean
     },

     isDrinker : {
      type : Boolean
     }

},{timestamps : true})

const User = mongoose.model("User" , userSchema);

export default User;
