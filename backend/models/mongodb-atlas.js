import mongoose from "mongoose";

const userSchema = mongoose.Schema({name: {type: String,required: true},email: {type: String,required: true,unique: true},subject: {type: String, required: true },message: {type: String},})

const User = mongoose.model("users",userSchema);

export default User;
