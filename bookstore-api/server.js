require('dotenv').config();
const express=require('express');
const connectToDB=require('./database/db.js');
const app=express();
const PORT=process.env.PORT;
connectToDB();
app.use(express.json());



app.listen(PORT,()=>{
    console.log("server's running at port",PORT);
})