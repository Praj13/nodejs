const funcs=require("./functions");

console.log(funcs.add(1,2))
console.log(funcs.sub(1,2))
console.log(funcs.div(1,2))

try{
    console.log("trying to divide by zero");
    console.log(funcs.div(0,0));
}

catch(error){
    console.log("error occured",error.message);
}
