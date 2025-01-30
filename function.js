// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("data is",dataId);
//         if(getNextData){
//         getNextData();
//         }

//     }, 2000);
  
// }
// getData(1,()=>{
//     getData(2)
// })
// setTimeout(getData(20),2000);

//promise

let myPromise =new Promise((resolve,reject)=>{
    let success=true;
    setTimeout(() => {
        if(success){
            console.log("success");
        }
        else{
            console.log("error");
        }
    }, 2000);
});

myPromise.then(result=>console.log(result))
.catch(error=>console.log(error))