const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI).then(()=>{console.log("database connected")}).catch((e)=>(console.log(e)))

const userSchema=new mongoose.Schema({
    name: String,
    email: String,
    age:Number,
    isActive:Boolean,
    tags: [String],
    createdAt: {type:Date,default:Date.now}
})

const User=mongoose.model('User',userSchema);

async function runQueryExamples() {
    try{
        // const newUser=await User.create(
        //     {
        //         name: "Prajwol Rajbansi",
        //         email: "rajbansiprajwlll@gmail.com",
        //         age:21,
        //         isActive:true,
        //         tags: ['developer','designer','manager'],
        //     }
        // )

        const newUser=new User(
            {
                name: "binesh shrestha",
                email: "haita@gmail.com",
                age:21,
                isActive:true,
                tags: ['developer','designer','ok'],
            }
        )
        await newUser.save();
        console.log("new user created",newUser)
    }
    catch(e){
        console.log('error=>',e)
    }
    finally{
        await mongoose.connection.close();
    }
}

runQueryExamples();