function api(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(data);
            resolve("success");
        }, 2000);
    })
}

// async function weatherData() {
//     console.log("fetching data 1")
//     await api(1);
//     console.log("fetching data 2")
//     await api(2); 
//      console.log("fetching data 3")
//     await api(3);
//     console.log("fetching data 4")
//     await api(4);
// }

// weatherData();

//using IIFE(Immediately Invoked Function Expression)
(async function () {
    console.log("fetching data 1")
    await api(1);
    console.log("fetching data 2")
    await api(2); 
     console.log("fetching data 3")
    await api(3);
    console.log("fetching data 4")
    await api(4);
})();
