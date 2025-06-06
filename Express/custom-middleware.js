const express=require('express');
const app=express();

const requestTimeStampLogger=(req,res,next)=>{
    const timeStamp=new Date().toISOString();
    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next();
}

app.use(requestTimeStampLogger);

app.get('/',(req,res)=>{
    res.send("Home page");
})

app.get('/about',(req,res)=>{
    res.send("about page");
})

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})