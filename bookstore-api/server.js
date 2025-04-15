require('dotenv').config();
const express=require('express');
const connectToDB=require('./database/db.js');
const bookRoutes=require('./routes/book-routes')


const app=express();
const PORT=process.env.PORT;
connectToDB();

//middleware
app.use(express.json());

//routes
app.use('/api/books',bookRoutes)

app.listen(PORT,()=>{
    console.log("server's running at port",PORT);
})