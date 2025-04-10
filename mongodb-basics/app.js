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
        //         name: "travis scoot",
        //         email: "yestaiho@gmail.com",
        //         age:31,
        //         isActive:true,
        //         tags: ['developer','designer','ok'],
        //     }
        // )

        const newUser=new User(
            {
                name: "updated user",
                email: "updated@gmail.com",
                age:100,
                isActive:true,
                tags: ['designer'],
            }
        )


        await newUser.save();
        console.log("new user created",newUser) 

        // const allUsers= User.find({});
        // console.log(allUsers);

        // const getUserOfActiveFalse=await User.find({isActive:false})
        // console.log(getUserOfActiveFalse);

        //return last created user 
        // const getLastCreatedUserByUserID=await User.findById(newUser._id);
        // console.log(getLastCreatedUserByUserID);


        //findOne returns the first found data which matches the given criteria
        // const getVoteyDon=await User.findOne({name:'votey don'})
        // console.log(getVoteyDon);

        // const Praj=await User.findById("67f4c6c7af3dc9311f449f36");
        // console.log(Praj)

        // const selectedFields=await User.find().select("name email -_id");
        // console.log(selectedFields);

        // const limitedUsers=await User.find().limit(5).skip(1);
        // console.log(limitedUsers);

        //this will sort the list of the users in descending order of their age.
        // const sortedUsers=await User.find().sort({age:-1});
        // console.log(sortedUsers);

          //this will sort the list of the users in ascending order of their age.
        //   const sortedUsers2=await User.find().sort({age:1});
        //   console.log(sortedUsers2);

        //count the documents who are active
        // const countDocuments=await User.countDocuments({isActive:true});
        // console.log(countDocuments);

        //count the documents who are inactive
        // const countDocuments2=await User.countDocuments({isActive:false});
        // console.log(countDocuments2);

        //deleting an user
        // const deleteduser=await User.findByIdAndDelete(newUser._id);
        // console.log(`user deleted->${deleteduser}`);

        //updating
        const updatedUser=await User.findByIdAndUpdate(newUser._id,{
            $set:{age:110},
            $push:{tags:'updated'}
        }, {new:true});
        console.log("user updated",updatedUser);
    }
    
    catch(e){
        console.log('error=>',e)
    }
    finally{
        await mongoose.connection.close();
    }
}

runQueryExamples();