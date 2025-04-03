const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("welcome to home page");
})

app.get('/products',(req,res)=>{
    const products=[
        {
            id:1,
            label:"Product 1"
        },
        {
            id:2,
            label:"Product 2"
        },
        {
            id:3,
            label:"Product 3"
        },
    ]
    res.json(products);
})
app.get('/products/:id',(req,res)=>{
    const productId=parseInt(req.params.id);
    const products=[
        {
            id:1,
            label:"Product 1"
        },
        {
            id:2,
            label:"Product 2"
        },
        {
            id:3,
            label:"Product 3"
        },
    ]
    const getSingleProduct=products.find(product=>product.id===productId);
    if(getSingleProduct){
        res.json(getSingleProduct);
    }
    else{
         res.statusCode(404).send("error, please try with different product id");   
    }
})
const port=4000;

app.listen(port,()=>{
    console.log("app is running at port 4000");
})