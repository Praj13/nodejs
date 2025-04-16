const mongoose=require('mongoose');
const BookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Book title is required'],
        trim:true,
        maxLength:[100,'Book title can\'t be more than 100 characters']  
    },
    author:{
        type:String,
        required:[true,'Book author is required'],
        trim:true,
    },
    year:{
        type:Number,
        required:[true,'Published year is required'],
        min:[1000,"Year must be at least 1000"],
        max:[new Date().getFullYear(),"published year cannot be the future date"]
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

module.exports=mongoose.model('Book',BookSchema);