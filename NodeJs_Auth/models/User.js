const mongoose=require('mongoose');
const { TIMESTAMP } = require('mysql/lib/protocol/constants/types');

const UserSchema=mongoose.Schema({
    username:{
        type:string,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:string,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password: {
        type:string,
        required: true
    },
    role:{
        type:string,
        enum:['user','admin'],
        default:'user'
    }
},{timestamps:true}) 

module.exports=mongoose.model("User",UserSchema)