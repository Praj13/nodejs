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

        // const newUser=new User(
        //     {
        //         name: "binesh shrestha",
        //         email: "haita@gmail.com",
        //         age:21,
        //         isActive:true,
        //         tags: ['developer','designer','ok'],
        //     }
        // )

        // const newUser=new User(
        //     {
        //         name: "votey don",
        //         email: "votey1@gmail.com",
        //         age:20,
        //         isActive:true,
        //         tags: ['designer'],
        //     }
        // )


        // await newUser.save();
        // console.log("new user created",newUser)

        // const allUsers= User.find({});
        // console.log(allUsers);

        // const getUserOfActiveFalse=await User.find({isActive:false})
        // console.log(getUserOfActiveFalse);


        //findOne returns the first found data which matches the given criteria
        const getVoteyDon=await User.findOne({name:'votey don'})
        console.log(getVoteyDon);
    }
    catch(e){
        console.log('error=>',e)
    }
    finally{
        await mongoose.connection.close();
    }
}

runQueryExamples();