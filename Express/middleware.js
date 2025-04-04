const express=require('express');
const app=express();

const myFirstMiddleware=(req,res,next)=>{
    console.log("this is my first middleware");
    next();
}

app.use(myFirstMiddleware);

app.get('/',(req,res)=>{
    res.send("Home page");
})

app.get('/about',(req,res)=>{
    res.send("about page");
})

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})