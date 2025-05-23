const mongoose=require('mongoose');
const connectToDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb connected successfully");  
    }
    catch(error){
        console.log("error connecting",error);
        process.exit(1);
    }
}
module.exports=connectToDB;