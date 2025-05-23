const express=require('express')
const path=require('path');

const app=express();

//set the view engine as ejs
app.set("view engine","ejs");


//set the directory for the views.
app.set("views",path.join(__dirname,'views'));

const products=[
    {
        id:1,
        title:"product 1"
    },
    {
        id:2,
        title:"product 2"
    },
    {
        id:3,
        title:"product 3"
    },
]

app.get('/',(req,res)=>{
    res.render('home',{title:'Home', products:products})
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About page'})
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})