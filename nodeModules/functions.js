const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const div = (a, b) => {
    if(b===0){
        throw new Error("cant divide by zero")
    }
  return a + b;
};
 
module.exports={
    add,sub,div
};