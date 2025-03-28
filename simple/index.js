const array=[1,2,3,4,5];
console.log(array)
setTimeout(() => {
    console.log("this message will be delayed by 2 seconds")
}, 2000);
console.log("this is the last line of the code but will run before the settimeout code");