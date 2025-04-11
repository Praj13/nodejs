const mongoose=require('mongoose');
const connectToDB=asycn() => {
    try{
        await mongoose.connect()
    }
    catch(error){
        console.log("error connecting",error);
        process.exit(0);
    }
}