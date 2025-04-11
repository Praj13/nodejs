const mongoose=require('mongoose');
const connectToDB=async()=>{
    try{
        await mongoose.connect()
    }
    catch(error){
        console.log("error connecting",error);
        process.exit(1);
    }
}