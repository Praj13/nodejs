const express=require("express")
const app=express();

const checkAuth=(req,res,next)=>{
    const isAuthenticated=false;
    if(!isAuthenticated){
       return res.status(403).send("access denied");
    }
    next();
}

app.get("/dashboard",checkAuth,(req,res)=>{
  
    res.send("welcome to your dashboard");
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})