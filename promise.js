// function asycnFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")  
//         }, 4000);
//     })
// }

function asycnFunc2(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(data);
            resolve("success")
          
        }, 2000);
    })
}
console.log("fetching data....");
asycnFunc2(1).then((res)=>{
  return asycnFunc2(2);
})
.then((res)=>{
   return asycnFunc2(3);
}).then((res)=>{
    console.log(res);
})
//     let p2=asycnFunc2();
//     console.log("fetching data2....");
//     p2.then((result)=>{
//         console.log(result);
//     })
// })